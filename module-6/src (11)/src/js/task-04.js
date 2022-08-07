
/* const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector('#value');

console.log(decrementBtn);
console.log(incrementBtn);
console.log(counterValue); */


let valueEl = document.getElementById('value');
let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');


const OnDecrementCounterValueClick = (even) => {
    counterValue -= 1;
    valueEl.textContent = counterValue;

};

const OnIncrementCounterValueClick = (even) => {
    counterValue += 1;
    valueEl.textContent = counterValue;
}

decrementBtn.addEventListener('click', OnDecrementCounterValueClick)
incrementBtn.addEventListener('click', OnIncrementCounterValueClick);


