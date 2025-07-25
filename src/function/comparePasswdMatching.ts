/**
 * Type of args for comparePasswdMatching method
 */
type passwdMatchingArguments = {
  /**Id of form in html */
  idOfForm: string;
  /** Id of input with first fields to check against second input */
  idOfPasswdInput: string;
  /** Id of second input to check against first input */
  idOfPasswdControlInput: string;
};

/**
 * If password and password-control fields (or any other 2 choose input fields) does not match.
 * Dont do anything with submit data and return custom error message about mathcing fields
 * @param args.idOfForm Id of form in html
 * @param args.idOfPasswdInput Id of input with first fields to check against second input
 * @param args.idOfPasswdControlInput Id of second input to check against first input
 */
const comparePasswdMatching = (args: passwdMatchingArguments) => {
  const { idOfForm, idOfPasswdInput, idOfPasswdControlInput } = args;
  const form = document.getElementById(idOfForm) as HTMLFormElement;
  const passwdInput = document.getElementById(
    idOfPasswdInput
  ) as HTMLInputElement;
  const passwdControlInput = document.getElementById(
    idOfPasswdControlInput
  ) as HTMLInputElement;

  passwdInput.addEventListener("input", () => {
    inputsCustomValidity(passwdInput, passwdControlInput);
  });

  passwdControlInput.addEventListener("input", () => {
    inputsCustomValidity(passwdInput, passwdControlInput);
  });

  //add event listener to form on passwd + passwd control for checking password
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (passwdInput.value != passwdControlInput.value) {
      passwdControlInput.setCustomValidity(
        "Heslo a kontrolní heslo se neshodují"
      );
      passwdControlInput.reportValidity();
    }
  });
};

/**
 * Set empty custom validity (no error message in case of reportValidity())
 * to array of inputs
 * @param inputs one or more HTMLElments sets in args like (x1, x2, x3...)
 */
const inputsCustomValidity = (...inputs: HTMLInputElement[]) => {
  inputs.forEach((input) => {
    input.setCustomValidity("");
  });
};

export default comparePasswdMatching;
