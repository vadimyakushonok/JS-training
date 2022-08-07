const inputEl = document.getElementById('name-input');
const spanEl = document.getElementById('name-output');

/* console.log(inputEl); */

function onChangeSpan(event) {

  /*   if(event.currentTarget.value === '') {
        spanEl.textContent = 'Anonymous';
    } else {
        spanEl.textContent = event.currentTarget.value;
    } */

    event.currentTarget.value === ''
    ? spanEl.textContent = 'Anonymous'
    : spanEl.textContent = event.currentTarget.value;
};


inputEl.addEventListener('input', onChangeSpan);