const menuIcon = document.querySelector(".menu-icon");
const lines = document.querySelectorAll(".line");

menuIcon.addEventListener('click', () => {
  for (item of lines) {
      item.classList.toggle('active');
      item.classList.toggle('disabled');
  }
});
