import "../styles/styles.css";
import "lazysizes";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import ClientArea from "./modules/ClientArea";
// Энд React-тай холбоотой кодууд байна.
import React from "react";
import ReactDOM from "react-dom";
// Өөрсдийн бичиж өгсөн React Component-ийг импорт хийх
import MyReactComponent from "./modules/MyReactComponent";
ReactDOM.render(
  <MyReactComponent />,
  document.querySelector("#my-react-example")
);

new ClientArea();
new StickyHeader();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 50);
new MobileMenu();
let modal;

document.querySelectorAll(".open-modal").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    if (typeof modal == "undefined") {
      import(/*webpackChunkName: "modal" */ "./modules/Modal.js")
        .then((x) => {
          modal = new x.default();
          setTimeout(() => modal.openModal(), 20);
        })
        .catch(() => console.log("Файлыг дуудахад алдаа гарлаа"));
    } else {
      modal.openModal();
    }
  });
});

if (module.hot) {
  module.hot.accept();
}
