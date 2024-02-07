import { el, setChildren } from "redom";
// import logo from "./images/Dashboard.svg";
import "./styles/style.scss";

const root = el(
  "div",
  "WEBPACK TASK",
  { class: "main" }
);
// const img = el("img", { class: "main__logo", src: logo })
const img = el("img", { class: "main__logo", src: "./images/Dashboard.svg" })
const block = el("div", "This is a block element", {
  class: "main__description",
});
setChildren(root, [block, img]);
setChildren(window.document.body, [root]);
console.log("This is a block element");
