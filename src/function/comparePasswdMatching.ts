type passwdMatchingArguments = {
  idOfForm: string;
  idOfPasswdInput: string;
  idOfPasswdControlInput: string;
};

const comparePasswdMatching = ({
  idOfForm,
  idOfPasswdInput,
  idOfPasswdControlInput,
}: passwdMatchingArguments) => {
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

  //nastaveni eventListeneru na form a kontrola hesel
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

const inputsCustomValidity = (...inputs: HTMLInputElement[]) => {
  inputs.forEach((input) => {
    input.setCustomValidity("");
  });
};

export default comparePasswdMatching;
