import "/src/css/createNavOnPageElement.css";

/**
 * argument for createNavOnPageElement fce
 */
type createNavOnPageElementParams = {
  /**id of element, which will be found and get onClick fce to navigate */
  idOfElement: string;
  /**where will be user navigate on page */
  toNavigate: string;
  /** value of scroll to get nav element visible, if not present, element will be visible without condition*/
  valueForActivate?: number;
};

/**
 * argument for setElementForNavigateParams fce
 */
type setElementForNavigateParams = {
  /**id of element, which will be found and get onClick fce to navigate */
  elementId: string;
  /**where will be user navigate on page */
  toNavigate: string;
};

/**
 * add in-page nav on element, in case of valueForActivate is number, the element will be set invisible and will be set visible after scroll ddown of value
 * e.g.: If user scroll more then 500 px, element will be visible on page
 *
 * If you want to let element visible from rendering of the page (e.g.: for sidebar nav panel), do not set valueForActivate
 *
 *
 * @param args.idOfElement id of element, which will be found and get onClick fce to navigate
 * @param args.toNavigate where will be user navigate on page
 * @param args.valueForActivate value of scroll to get nav element visible, if not present, element will be visible without condition
 *
 */
const createNavOnPageElement = (args: createNavOnPageElementParams): void => {
  const { idOfElement, toNavigate, valueForActivate } = args;
  const elementToSetVisible = document.getElementById(idOfElement);
  if (typeof valueForActivate == "number") {
    elementToSetVisible?.classList.add("hidden");
  }
  setElementForNavigate({ elementId: idOfElement, toNavigate: toNavigate });

  if (valueForActivate !== undefined) {
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
 * @param args.elementId Id of in which we will se navigation
 * @param args.toNavigate Id of element to navigate
 */
const setElementForNavigate = (args: setElementForNavigateParams): boolean => {
  const { elementId, toNavigate } = args;
  const elementForNavigation: HTMLElement | null =
    document.getElementById(elementId);
  elementForNavigation?.addEventListener("click", () => {
    console.log("click");
    window.location.hash = toNavigate;
  });
  return elementForNavigation === null ? false : true;
};

export default createNavOnPageElement;
