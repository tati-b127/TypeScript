"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redom_1 = require("redom");
var Dashboard_svg_1 = require("./images/Dashboard.svg");
require("./styles/style.scss");
var root = (0, redom_1.el)("div", "WEBPACK TASK", { class: "main" });
var img = (0, redom_1.el)("img", { class: "main__logo", src: Dashboard_svg_1.default });
var block = (0, redom_1.el)("div", "This is a block element", {
    class: "main__description",
});
(0, redom_1.setChildren)(root, [block, img]);
(0, redom_1.setChildren)(window.document.body, [root]);
console.log("This is a block element");
