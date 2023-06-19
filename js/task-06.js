const inputValue = document.querySelector('#validation-input');
const lengthValue = inputValue.dataset.length;


inputValue.addEventListener('blur', onblur);

function onblur(event) {
    if(Number(event.currentTarget.value.length) === Number(lengthValue)) {
        inputValue.classList.add("valid");
        inputValue.classList.remove("invalid");
    }
    else {
        inputValue.classList.add("invalid");
        inputValue.classList.remove("valid");
    }
    console.log(event.currentTarget.value.length === Number(lengthValue));
}