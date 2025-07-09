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

  //append img class "header-logo" to logoWrapperDiv
  const headerLogoImg: HTMLImageElement = addElement({
    typeOfElement: "img",
    classToAdd: "header-logo",
    whereToAdd: logoWrapperDiv,
  }) as HTMLImageElement;

  //add values and property to headerLogoImg
  //console.log(import.meta.env.DEV);
  const imgUrl = new URL("/src/pictures/netflix-logo.png", import.meta.url)
    .href;

  headerLogoImg.src = imgUrl;
  headerLogoImg.alt = "logo netflix";

  //append a class "header-button" to headerObjectWrapperDiv
  const headerButtonAnchor: HTMLAnchorElement = addElement({
    typeOfElement: "a",
    classToAdd: "header-button",
    whereToAdd: headerObjectWrapperDiv,
  }) as HTMLAnchorElement;

  //add values and property to headerButtonAnchor
  let isMainPage: boolean = document.title === "main" ? true : false;

  headerButtonAnchor.textContent = isMainPage ? "Registrace" : "Main page";
  headerButtonAnchor.href = isMainPage
    ? setPageUrl("register")
    : setPageUrl("index");

  return header;
};

export default createHeader;
