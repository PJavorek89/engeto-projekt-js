import "/src/css/compareElements.css";

/**
 * Type of args for compareElements method
 */
type CompareElementsArguments = {
  /**Id of first element, which content will be compared to secondElement and get EventListener */
  firstElementId: string;
  /**Id of second element, which content will be compared to firstElement and get EventListener */
  secondElementId: string;
};

/**
 * Type of args for addOrRemoveBorderBasedOnComparation method
 */
type AddOrRemoveBorderBasedOnComparationArguments = {
  /**first HTMLInputElement */
  element1: HTMLInputElement;
  /**second HTMLInputElement */
  element2: HTMLInputElement;
};

/**
 * Function, which takes Id of 2 HTMLinput element as parameters, if elements exist, they get eventListener and their content
 *  will be compared on fly and get borders depending on situations :
 * green border-> content1 coresponding with content2
 * red border -> content1 is not corresponding iwth content2
 *
 * @param args.firstElemenId Id of first element, which content will be compared to secondElement and get EventListener
 * @param args.secondElementId Id of second element, which content will be compared to firstElement and get EventListener
 */
const compareElements = (args: CompareElementsArguments): void => {
  const { firstElementId, secondElementId } = args;
  const firstInput = document.getElementById(
    firstElementId
  ) as HTMLInputElement;
  //null check
  if (!firstInput) {
    alert(
      `Not able to create fce compareElements \nCannot find elemet by id ${firstElementId}`
    );
    return;
  }

  const secondInput = document.getElementById(
    secondElementId
  ) as HTMLInputElement;
  if (!secondInput) {
    alert(
      `Not able to create fce compareElements \nCannot find elemet by id ${secondElementId}`
    );
    return;
  }
  firstInput?.addEventListener("input", () => {
    addOrRemoveBorderBasedOnComparation({
      element1: firstInput,
      element2: secondInput,
    });
  });
  secondInput?.addEventListener("input", () => {
    addOrRemoveBorderBasedOnComparation({
      element1: firstInput,
      element2: secondInput,
    });
  });
};

/**
 * function takes 2 HTMLinput element to compare and get color border depend on situation
 * This comparations is one time and not dynamic (without eventListeners)
 * green border-> content1 coresponding with content2
 * red border -> content1 is not corresponding with content2
 *
 * @param args.element1 first HTMLInputElement
 * @param args.element2 second HTMLInputElement
 */
const addOrRemoveBorderBasedOnComparation = (
  args: AddOrRemoveBorderBasedOnComparationArguments
): void => {
  const { element1, element2 } = args;
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
