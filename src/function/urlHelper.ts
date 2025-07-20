/**
 * function for generating URL of the .html file which depend if exist on dev or prod env
 *
 * @param originalUrl name of the html file without extension (e.g: index.html -> index)
 * @returns url of html file
 */
const setPageUrl = (originalUrl: string): string => {
  //const isDev: boolean = import.meta.env.DEV;
  const prefix: string = import.meta.env.BASE_URL + "pages/";
  const prefixToMain: string = import.meta.env.BASE_URL;

  /*
  const prefix: string = isDev
    ? import.meta.env.BASE_URL + "/pages/"
    : import.meta.env.BASE_URL;
    */
  if (originalUrl === "index") {
    return prefixToMain.concat(originalUrl).concat(".html");
  } else {
    return prefix.concat(originalUrl).concat(".html");
  }
};

export default setPageUrl;
