
const colorSpan = document.querySelector(".color");
const colorBtn = document.querySelector(".change-color");
// const bodyColor = document.querySelector(".widget");
colorBtn.addEventListener("click", handClick);

function handClick() {

  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
