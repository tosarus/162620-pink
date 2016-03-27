var menu_link = document.querySelector(".main-menu__toggle");
var menu_popup = document.querySelector(".main-menu__wrapper");
var menu_icon = document.querySelector("#icon-menu-burger");

menu_link.addEventListener("click", function(event) {
  event.preventDefault();

  if (menu_popup.classList.contains("main-menu__wrapper--closed")) {
    menu_popup.classList.remove("main-menu__wrapper--closed");
    var use = menu_link.querySelector("use");
    if (use) {
      use.setAttribute("xlink:href", "#icon-menu-cross");
    }
  }
  else {
    menu_popup.classList.add("main-menu__wrapper--closed");
    var use = menu_link.querySelector("use");
    if (use) {
      use.setAttribute("xlink:href", "#icon-menu-burger");
    }
  }
});

var mainform = document.querySelector(".form--main");
if (mainform)
{
  var first_name = mainform.querySelector("[name=first-name]");
  var last_name = mainform.querySelector("[name=last-name]");
  var middle_name = mainform.querySelector("[name=middle-name]");
  var popup_ok = document.querySelector(".popup--ok");
  var popup_error = document.querySelector(".popup--error");

  mainform.addEventListener("submit", function(event) {
    event.preventDefault();

    if (!first_name.value || !last_name.value || !middle_name.value) {
      popup_error.classList.remove("popup--closed");
    }
    else {
      popup_ok.classList.remove("popup--closed");
    }
  });

  popup_ok.querySelector(".popup__form")
          .addEventListener("submit", function(event) {
            event.preventDefault();
            popup_ok.classList.add("popup--closed");
          });

  popup_error.querySelector(".popup__form")
             .addEventListener("submit", function(event) {
               event.preventDefault();
               popup_error.classList.add("popup--closed");
             });
}

if (document.querySelector("#map")) {
  ymaps.ready(function() {
    var myMap = new ymaps.Map("map", {
        center: [59.938667, 30.323073],
        zoom: 16,
        controls: []
      });

    var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: "Приезжайте в гости!",
          balloonContent: "ул. Большая Конюшенная, 19/8"
        }, {
            iconLayout: "default#image",
            iconImageHref: "img/sprites.svg#icon-marker",
            iconImageSize: [36, 36],
            iconImageOffset: [-18, -18]
        });

    myMap.geoObjects.add(myPlacemark);
  });
}
