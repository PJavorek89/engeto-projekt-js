import "/src/css/createNavOnPageElement.css";

/**
 *
 */
type createNavOnPageElementParams = {
  idOfElement: string;
  toNavigate: string;
  valueForActivate?: number;
};

/**
 * add in-page nav on element, in case of valueForActivate is number, the element will be set invisible and will be set visible after scroll ddown of value
 * e.g.: If user scroll more then 500 px, element will be visible on page
 *
 * If you want to let element visible from rendering of the page (e.g.: for sidebar nav panel), do not set valueForActivate
 *
 *
 * @idOfElement id of element, which will be found and get onClick fce to navigate
 * @toNavigate where will be user navigate on page
 * @valueForActivate value of scroll to get nav element visible, if not present, element will be visible without condition
 *
 */
const createNavOnPageElement = ({
  idOfElement,
  toNavigate,
  valueForActivate,
}: createNavOnPageElementParams): void => {
  const elementToSetVisible = document.getElementById(idOfElement);
  if (typeof valueForActivate == "number") {
    elementToSetVisible?.classList.add("hidden");
  }
  setElementForNavigate(idOfElement, toNavigate);

  if (valueForActivate) {
    //typeof valueForActivate == "number"
    window.addEventListener("scroll", () => {
      const scrooledBy = window.scrollY;

      valueForActivate < scrooledBy
        ? elementToSetVisible?.classList.replace("hidden", "visible")
        : elementToSetVisible?.classList.replace("visible", "hidden");
    });
  }
};

/**
 * Add eventListener on the button for navigation on page to the certain element
 */
const setElementForNavigate = (
  elementId: string,
  toNavigate: string
): boolean => {
  const elementForNavigation: HTMLElement | null =
    document.getElementById(elementId);
  elementForNavigation?.addEventListener("click", () => {
    console.log("click");
    window.location.hash = toNavigate;
  });
  return elementForNavigation === null ? false : true;
};

export default createNavOnPageElement;
