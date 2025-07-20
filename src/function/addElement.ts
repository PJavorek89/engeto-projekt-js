/**
 * type for creating,adding classes and adding element in function addElement
 *
 */
type AddElementParams = {
  /**string represents type of created element */
  typeOfElement: string;
  /**string or string[] with name of classes for created element */
  classToAdd?: string | string[];
  /** name of parent HTML element on which will be created element added*/
  whereToAdd?: HTMLElement | null;
  /**decide if element should be append (false : falsy) or prepend (true) to his parent */
  isPrepend?: boolean;
  /**string with name of Id for created element */
  idToAdd?: string;
};

/**
 * Create and append element with classes to parent
 *
 * @param args.typeOfElement string represents type of created element
 * @param args.classToAdd string or string[] with name of classes for created element
 * @param args.whereToAdd name of parent HTML element on which will be created element added
 * @param args.isPrepend decide if element should be append (false : falsy) or prepend (true) to his parent
 * @param args.idToAdd string with name of Id for created element
 * @returns created element
 */
const addElement = (args: AddElementParams): HTMLElement => {
  const { typeOfElement, classToAdd, whereToAdd, isPrepend, idToAdd } = args;
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
