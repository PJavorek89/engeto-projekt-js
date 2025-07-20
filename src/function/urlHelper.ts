/**
 * function for generating URL of the .html file which depend if exist on dev or prod env
 *
 * @param originalUrl name of the html file without extension (e.g: index.html -> index)
 * @returns url of html file
 */
const setPageUrl = (originalUrl: string): string => {
  const isDev: boolean = import.meta.env.DEV;
  const prefix: string = isDev
    ? import.meta.env.BASE_URL + "/pages/"
    : import.meta.env.BASE_URL;
  return prefix.concat(originalUrl).concat(".html");
};

export default setPageUrl;
