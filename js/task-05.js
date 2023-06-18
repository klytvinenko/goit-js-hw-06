const inputValue = document.querySelector('#name-input');
const nameValue = document.querySelector('#name-output');

console.dir(inputValue);

inputValue.addEventListener('input', onInput);

function onInput(event) {
    
    
    if(event.currentTarget.value !== '') {
        nameValue.textContent = event.currentTarget.value;
    } else {
        nameValue.textContent = 'Anonimus';
    }
    
}