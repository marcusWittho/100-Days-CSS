const btnNav = document.querySelector(".btnNav");
const lines = document.querySelectorAll(".line");
const inpField = document.querySelector(".inpField");
const notifications = document.querySelector(".lblNotifications");
const btnSearch = document.querySelector(".btnSearch");
const mainSection = document.querySelector(".main-section");
const menu = document.querySelector(".menu-container");

btnNav.addEventListener('click', () => {
  for (item of lines) {
    item.classList.toggle("enable");
    item.classList.toggle("disable");
  }

  mainSection.classList.toggle("show-menu");

  menu.classList.toggle("menu");
  menu.classList.toggle("hidden-menu");
});

btnSearch.addEventListener('click', () => {
  btnNav.classList.toggle("show-field");
  notifications.classList.toggle("show-field");
  inpField.classList.toggle("hidden-field");

  btnNav.classList.toggle("hidden-field");
  notifications.classList.toggle("hidden-field");
  inpField.classList.toggle("show-field");
});
