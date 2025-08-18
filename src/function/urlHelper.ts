/**
 * function for generating URL of the .html file which depend if exist on dev or prod env
 *
 * @param originalUrl name of the html file without extension (e.g: index.html -> index)
 * @returns url of html file
 */
const setPageUrl = (originalUrl: string): string => {
  const prefix: string = import.meta.env.BASE_URL + "pages/";
  const prefixToMain: string = import.meta.env.BASE_URL;

  if (originalUrl === "index") {
    return `${prefixToMain}${originalUrl}.html`;
  } else {
    return `${prefix}${originalUrl}.html`;
  }
};

export default setPageUrl;
