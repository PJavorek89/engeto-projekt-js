import createHeader from "./function/header";
import createNavOnPageElement from "./function/createNavOnPageElement";

createHeader();
createNavOnPageElement({
  idOfElement: "fa-up",
  toNavigate: "header",
  valueForActivate: 175,
});
