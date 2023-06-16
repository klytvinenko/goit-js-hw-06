const counterNum = document.querySelector('#counter');
const decrNum = counterNum.firstElementChild;
const num = document.querySelector('#value');
let counterValue = 0;
const incrNum = counterNum.lastElementChild;
// console.dir(counterNum);
// console.log(decrNum);
// console.dir(counterValue + 1);
// console.log(incrNum);

decrNum.addEventListener('click', onMinus);

function onMinus(event) {
    counterValue -= 1;
    num.textContent = counterValue;
    return
}

incrNum.addEventListener('click', onPlus);

function onPlus (event) {
    counterValue += 1;
    num.textContent = counterValue;
    return
}
