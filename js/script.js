var menu_link = document.querySelector(".main-menu__toggle");
var menu_popup = document.querySelector(".main-menu__wrapper");
var menu_close = document.querySelector(".main-menu__close-btn");

menu_link.addEventListener("click", function(event) {
  if (menu_popup.classList.contains("main-menu__wrapper--closed")) {
    menu_popup.classList.remove("main-menu__wrapper--closed");
  }
});

menu_close.addEventListener("click", function(event) {
  if (!menu_popup.classList.contains("main-menu__wrapper--closed")) {
    menu_popup.classList.add("main-menu__wrapper--closed");
  }
});
