const inputValue = document.querySelector('#font-size-control');
const textValue = document.querySelector('#text');
console.log(textValue.textContent);


inputValue.addEventListener('input', onInput);

function onInput(event) {

     textValue.style.fontSize = `${inputValue.value}px`;
}