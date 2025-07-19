import "/src/css/compareElements.css";

type compareElementsArguments = {
  firstElementId: string;
  secondElementId: string;
};

/**
 * Function, which takes Id of 2 HTMLinput element as parameters, if elements exist, they get eventListener and their content
 *  will be compared on fly and get borders depending on situations :
 * green border-> content1 coresponding with content2
 * red border -> content1 is not corresponding iwth content2
 *
 * @param firstElemenId Id of first element, which content will be compared to secondElement and get EventListener
 * @param secondElementId Id of second element, which content will be compared to firstElement and get EventListener
 */
const compareElements = ({
  firstElementId,
  secondElementId,
}: compareElementsArguments): void => {
  const firstIpnut = document.getElementById(
    firstElementId
  ) as HTMLInputElement;
  const secondIpnut = document.getElementById(
    secondElementId
  ) as HTMLInputElement;
  firstIpnut?.addEventListener("input", () => {
    addOrRemoveBorderBasedOnComparation(firstIpnut, secondIpnut);
  });
  secondIpnut?.addEventListener("input", () => {
    addOrRemoveBorderBasedOnComparation(firstIpnut, secondIpnut);
  });
};

/**
 * function takes 2 HTMLinput element to compare and get color border depend on situation
 * This comparations is one time and not dynamic (without eventListeners)
 * green border-> content1 coresponding with content2
 * red border -> content1 is not corresponding with content2
 *
 * @param element1 first HTMLInputElement
 * @param element2 second HTMLInputElement
 */
const addOrRemoveBorderBasedOnComparation = (
  element1: HTMLInputElement,
  element2: HTMLInputElement
): void => {
  if (element1.value != "" || element2.value != "") {
    element1.classList.toggle("border-green", element1.value == element2.value);
    element2.classList.toggle("border-green", element1.value == element2.value);
    element1.classList.toggle("border-red", element1.value != element2.value);
    element2.classList.toggle("border-red", element1.value != element2.value);
  }
  if (element1.value == "" && element2.value == "") {
    element1.classList.remove("border-green", "border-red");
    element2.classList.remove("border-green", "border-red");
  }
};

export default compareElements;
