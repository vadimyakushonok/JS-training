
const refs2 = {
    formModule82: document.querySelector('.form-module-8'),
    inputModule82: document.querySelector('.input-module-82'),
    textareaModule82: document.querySelector('.textarea-module-82'),
    buttonModule82: document.querySelector('.button-module-82'),
};

const STORAGE_KEY = 'feedback-msg';

refs2.formModule82.addEventListener('submit', onFormSubmitModule82);
/* refs2.textareaModule82.addEventListener('input', onTextareaModule82); */
refs2.formModule82.addEventListener('input', onFormInputModule82);

//nameInputModule8
//messageTextareaModule8

/* getFeedbackMessage(); */


function onFormSubmitModule82 (e) {
    e.preventDefault();
    console.log('Send form');
    console.log(refs2.inputModule82.value);
    console.log(refs2.textareaModule82.value);
    e.target.reset();
    localStorage.removeItem(STORAGE_KEY);
    
}

function onFormInputModule82 (e) {
    /* console.log(refs2.inputModule82.value);
    console.log(refs2.textareaModule82.value); */
    const inputArrayModule82 = [];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(inputArrayModule82));
}


// const inputArrayModule82 = STORAGE_KEY ? ____ : {};


/* function onTextareaModule82 (e) {
    const messageModule82 = e.target.value;

    localStorage.setItem(STORAGE_KEY, messageModule82);
} */

/* function getFeedbackMessage () {
    const saveMessage = localStorage.getItem(STORAGE_KEY);

    if(saveMessage) {
        console.log(saveMessage);
        refs2.textareaModule82.value = saveMessage;
    }
} */

