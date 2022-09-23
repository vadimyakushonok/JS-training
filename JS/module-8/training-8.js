import { refs } from './refs-module-8.js';

const createLiModule8 = (text) => `<li class="list-item-modul-8" data-id="${text}">${text}</li>`;

const addLiToListModule8 = (markItem) => {
    refs.listModule8.insertAdjacentHTML('beforeEnd', markItem);
}


const onSubmitFormModule8 = (e) => {
    e.preventDefault();
    const valueModule8 = refs.inputModule8.value;
    const liModule8 = createLiModule8(valueModule8);
    addLiToListModule8(liModule8);
    refs.inputModule8.value = "";
}

refs.formModule8.addEventListener('submit', onSubmitFormModule8)
