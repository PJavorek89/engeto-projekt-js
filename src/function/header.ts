import setPageUrl from "./urlHelper";
import addElement from "./addElement";
import "/src/css/header.css";
/**
 *
 * Fce to create header for .html file
 *
 * @returns HTMLElement header with predefined classes and child
 */
const createHeader = (): HTMLElement => {
  const body: HTMLElement | null = document.querySelector("body");
  //create and add header element
  const header: HTMLElement = addElement({
    typeOfElement: "header",
    whereToAdd: body,
    isPrepend: true,
    idToAdd: "header",
  });

  //append div class "header-background to header element"
  const headerBackgroundDiv: HTMLElement = addElement({
    typeOfElement: "div",
    classToAdd: "header-background",
    whereToAdd: header,
  });

  //append div class "header" to headerBackgroundDiv
  const headerDiv: HTMLElement = addElement({
    typeOfElement: "div",
    classToAdd: "header",
    whereToAdd: headerBackgroundDiv,
  });

  //append div class "header-object-wrapper" to headerDiv
  const headerObjectWrapperDiv: HTMLElement = addElement({
    typeOfElement: "div",
    classToAdd: "header-object-wrapper",
    whereToAdd: headerDiv,
  });

  //append div class "logo-wrapper" to headerObjectWrapperDiv
  const logoWrapperDiv: HTMLElement = addElement({
    typeOfElement: "div",
    classToAdd: "logo-wrapper",
    whereToAdd: headerObjectWrapperDiv,
  });

  //append img element woth class "header-logo" to logoWrapperDiv
  createLogo(logoWrapperDiv);

  //append anchor element with a class "header-button" to headerObjectWrapperDiv
  createButton(headerObjectWrapperDiv);

  return header;
};

/**
 * Create and add logo to header
 *
 * @param toAdd HTMLElement, to which will be ImageElement add (as a child element)
 * @returns
 */
const createLogo = (toAdd: HTMLElement): HTMLImageElement => {
  const logoImg = addElement({
    typeOfElement: "img",
    classToAdd: "header-logo",
    whereToAdd: toAdd,
  }) as HTMLImageElement;

  //add values and property to headerLogoImg
  const imgUrl = new URL("/src/pictures/netflix-logo.png", import.meta.url)
    .href;

  logoImg.src = imgUrl;
  logoImg.alt = "logo netflix";

  return logoImg;
};

//create button with a element and name
/**
 * Create, name and set href of anchor element
 *
 * @param toAdd HTMLElement, to which will be anchorElent add (as a child element)
 * @returns
 */
const createButton = (toAdd: HTMLElement): HTMLAnchorElement => {
  const headerButtonAnchor: HTMLAnchorElement = addElement({
    typeOfElement: "a",
    classToAdd: "header-button",
    whereToAdd: toAdd,
  }) as HTMLAnchorElement;

  //add values and property to headerButtonAnchor
  let isMainPage: boolean = document.title === "main" ? true : false;

  headerButtonAnchor.textContent = isMainPage ? "Registrace" : "Main page";
  headerButtonAnchor.href = isMainPage
    ? setPageUrl("register")
    : setPageUrl("index");

  return headerButtonAnchor;
};

export default createHeader;
