import addElement from "./addElement";
import "/src/css/filterMovie.css";

/**
 * Interface of image type of filtered movie
 */
interface ImageType {
  medium: string;
  original: string;
}

/**
 * Interface of filtered movie
 */
interface Movie {
  score: number;
  show: {
    image: ImageType | null;
    name: string;
  };
}

/**
 *  function, which will render image of filtered movie
 *
 * @param idOfElement element, where on the page will be added filtered movie
 */
const addMovieFilter = (idOfElement: string): void => {
  const selectMovieElement = document.getElementById(
    idOfElement
  ) as HTMLSelectElement | null;
  if (!selectMovieElement) {
    alert(
      `Not able to create fce addMovieFilter \nCannot find elemet by id ${idOfElement}`
    );
    return;
  }
  const spaceForFilteredMovies = document.createElement("div");
  spaceForFilteredMovies.classList.add("filtered-movie-spaceholder");
  selectMovieElement?.insertAdjacentElement(
    "afterend",
    spaceForFilteredMovies as HTMLElement
  );
  selectMovieElement?.addEventListener("change", (e) => {
    spaceForFilteredMovies.innerHTML = "";
    const target = e.target as HTMLOptionElement;
    const valueToFilter = target.value;
    filteredMovie(valueToFilter, spaceForFilteredMovies);
  });
};

/**
 * Fetch data and render them to page or render error element
 * @param valueToFilter value of filter, which will be send to API
 * @param whereToAdd element, where will be filtered movie (or error) added
 */
const filteredMovie = async (
  valueToFilter: string,
  whereToAdd: HTMLElement
) => {
  const API_BASE_URL = "https://api.tvmaze.com/search/shows?q=";
  let data: Movie[] = [];
  //occurrance of error false=no error, true = error
  let hasError: boolean = false;
  //value of error type for error rendering
  let errorType: string = "";

  //create loading element and add him to page in the start the filteredMovie function
  const loadingElement = addElement({
    typeOfElement: "p",
    classToAdd: "loading-element",
    whereToAdd: whereToAdd,
    isPrepend: true,
    idToAdd: "loading-element",
  });
  loadingElement.innerText = "Loading...";

  //create error element for render in case of error occurrence
  const errorElement = addElement({
    typeOfElement: "div",
    classToAdd: "error-element",
    idToAdd: "error-element",
  });
  const ERROR_BASIC_TEXT = "Opps, something went wrong: \n";

  //fetch data or catch error element in case of error
  try {
    const response = await fetch(`${API_BASE_URL}${valueToFilter}`);
    data = await response.json();
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (err) {
    hasError = true;
    errorType =
      err instanceof Error ? (err as unknown as string) : "Unknown error";
    errorElement.textContent = `${ERROR_BASIC_TEXT}${errorType}`;
  } finally {
    whereToAdd?.removeChild(loadingElement);
  }

  //render error or movie to the page
  if (hasError) {
    //errorElement.appendChild(errorType);
    whereToAdd?.appendChild(errorElement);
  } else {
    data.forEach((movie: Movie) => {
      const { image, name } = movie.show;
      if (image == null) {
        const movieFilterEnvelope = addElement({
          typeOfElement: "div",
          classToAdd: ["filter-movie-envelope", "no-image-movie"],
          whereToAdd: whereToAdd,
        });
        const textNodeMovieName = document.createTextNode(name);
        movieFilterEnvelope.appendChild(textNodeMovieName);
        const noImageTag = addElement({
          typeOfElement: "div",
          whereToAdd: movieFilterEnvelope,
        });
        noImageTag.textContent = "(no image)";
      } else {
        const { medium } = image;
        const movieFilterEnvelope = addElement({
          typeOfElement: "div",
          classToAdd: "filter-movie-envelope",
          whereToAdd: whereToAdd,
        });
        const imgElement = addElement({
          typeOfElement: "img",
          whereToAdd: movieFilterEnvelope,
        }) as HTMLImageElement;
        imgElement.src = medium;
        imgElement.alt = `image for movie ${name}`;
      }
    });
  }
};

export default addMovieFilter;
