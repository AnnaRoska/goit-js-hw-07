
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  
}
const colorTxt = document.querySelector(".color");

const btn = document.querySelector(".change-color");
btn.addEventListener("click", () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorTxt.textContent = color;
}
)
