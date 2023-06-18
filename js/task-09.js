function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const body = document.body;
const colorSpan = document.querySelector('.color');
const changeButton = document.querySelector('.change-color');

changeButton.addEventListener('click', onChange);
// let color = getRandomHexColor();

function onChange (event) {
    body.style.backgroundColor = getRandomHexColor();
    colorSpan.textContent = getRandomHexColor();
}

