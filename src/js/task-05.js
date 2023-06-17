const inputValue = document.querySelector('#name-input');
const nameValue = document.querySelector('#name-output');

console.dir(inputValue);

inputValue.addEventListener('input', onInput);

function onInput(event) {
    nameValue.textContent = event.currentTarget.value;
    return 
    if(event.currentTarget.value === 'false') {
        nameValue.textContent = 'Anonimus'
    }
}