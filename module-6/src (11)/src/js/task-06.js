const validationInput = document.getElementById('validation-input');
const lengthSymbol = document.querySelector('[data-length="6"]');

console.log(lengthSymbol.dataset.length);


function onCheckInput(evt) {
/*     if (evt.currentTarget.value.length === Number(lengthSymbol.dataset.length)) {
        validationInput.classList.add('valid');
        brake;
    } else {
        validationInput.classList.add('invalid');
    } */

    evt.currentTarget.value.length === Number(lengthSymbol.dataset.length)
    ? validationInput.classList.add('valid')
    : validationInput.classList.add('invalid')
};

validationInput.addEventListener('blur', onCheckInput);