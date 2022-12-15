const worldElem = document.querySelector(".world");
const cards = document.querySelectorAll("card");

const cardimg = {};

function clickHandler(e) {
  if (e.target.classList.value !== "open") {
    e.target.classList.toggle("open");
  } else if (e.target.classList.value == "open") {
    e.target.classList.toggle("open");
  }
}

worldElem.addEventListener("click", clickHandler);
