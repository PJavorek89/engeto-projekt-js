//import addElement from "./addElement";

import addElement from "./addElement";
import "/src/css/filterMovie.css";

interface ImageType {
  medium: string;
  original: string;
}

interface Movie {
  score: number;
  show: {
    image: ImageType | null;
    name: string;
  };
}

const addMovieFilter = (idOfElement: string) => {
  const selectMovieElement = document.getElementById(
    idOfElement
  ) as HTMLSelectElement | null;
  const spaceForFilteredMovies = document.createElement("div") as HTMLElement;
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

const filteredMovie = async (
  valueToFilter: string,
  whereToAdd: HTMLElement
) => {
  const urlToCall = "https://api.tvmaze.com/search/shows?q=";
  let data: [] = [];
  try {
    const response = await fetch(urlToCall + valueToFilter);
    data = await response.json();
  } catch (err) {
    console.log("this is erro:" + err);
  }

  console.log(data);

  const newArray = data.map((movie: Movie) => {
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

      return true;
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
      return medium;
    }
  });

  console.log(newArray);
};

/*
const valueForm = document.getElementById("movie-form");
console.log(valueForm);
valueForm?.addEventListener("change", (e) => {
  //let testLog = "";
  const target = e.target as HTMLOptionElement;
  console.log("change");
  console.log(`select: ${target.value}`);

  const urlToCall = "https://api.tvmaze.com/search/shows?q=";
  const valueToFilter = target.value;

  console.log(`target URL: ${urlToCall + valueToFilter}`);

  filteredMovie(valueToFilter);
});
*/

export default addMovieFilter;
