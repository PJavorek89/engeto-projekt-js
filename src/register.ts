import createHeader from "./function/header";
import compareElements from "./function/compareElements";
import comparePasswdMatching from "./function/comparePasswdMatching";

createHeader();
compareElements({
  firstElementId: "passwd",
  secondElementId: "passwd-control",
});
comparePasswdMatching({
  idOfForm: "register-form",
  idOfPasswdInput: "passwd",
  idOfPasswdControlInput: "passwd-control",
});
