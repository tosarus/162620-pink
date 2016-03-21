var menu_link = document.querySelector(".main-menu__toggle");
var menu_popup = document.querySelector(".main-menu__wrapper");

menu_link.addEventListener("click", function(event) {
  event.preventDefault();

  if (menu_popup.classList.contains("main-menu__wrapper--closed")) {
    menu_popup.classList.remove("main-menu__wrapper--closed");
    menu_link.classList.add("main-menu__toggle--opened");
  }
  else {
    menu_popup.classList.add("main-menu__wrapper--closed");
    menu_link.classList.remove("main-menu__toggle--opened");
  }
});
