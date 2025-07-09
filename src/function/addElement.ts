/**
 * type for creating,adding classes and adding element in function addElement
 *
 */
type AddElementParams = {
  typeOfElement: string;
  classToAdd?: string | string[];
  whereToAdd?: HTMLElement | null;
  isPrepend?: boolean;
  idToAdd?: string;
};

/**
 * Create and append element with classes to parent
 *
 * @param typeOfElement string represents type of created element
 * @param classToAdd string or string[] with name of classes for created element
 * @param whereToAdd name of parent HTML element on which will be created element added
 * @param isPrepend decide if element should be append (false : falsy) or prepend (true) to his parent
 * @param idToAdd string with name of Id for created element
 * @returns created element
 */
const addElement = ({
  typeOfElement,
  classToAdd,
  whereToAdd,
  isPrepend,
  idToAdd,
}: AddElementParams): HTMLElement => {
  const elementToCreate = document.createElement(typeOfElement);
  if (classToAdd) {
    Array.isArray(classToAdd)
      ? elementToCreate.classList.add(...classToAdd)
      : elementToCreate.classList.add(classToAdd);
  }
  if (whereToAdd)
    isPrepend
      ? whereToAdd.prepend(elementToCreate)
      : whereToAdd.appendChild(elementToCreate);
  if (idToAdd) {
    elementToCreate.id = idToAdd;
  }
  return elementToCreate;
};

export default addElement;
