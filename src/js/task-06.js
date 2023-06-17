const inputValue = document.querySelector('#validation-input');
const lengthValue = inputValue.dataset.length;


inputValue.addEventListener('blur', onblur);

function onblur(event) {
    if(Number(event.currentTarget.value.length) === Number(lengthValue)) {
        inputValue.classList.add("valid");
    }
    else {
        inputValue.classList.add("invalid");
    }
    console.log(event.currentTarget.value.length === Number(lengthValue));
}