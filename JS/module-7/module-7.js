const containerTask1 = document.querySelector('.js-container-module-7');

containerTask1.addEventListener('click', onBtnClickTask1);

function onBtnClickTask1 (e) {

if(e.target.nodeName !== 'BUTTON') {
    return
} else {
    console.log (e.target.textContent);
}
};

const addBtnTask1 = document.querySelector('.add-btn');
let labelCounterTask1 = 5;

addBtnTask1.addEventListener('click', onAddBtnTask1);

function onAddBtnTask1 (e) {
    const newBtn = document.createElement('button');
    newBtn.classList.add('btn-task-1');
    newBtn.type = 'button';
    newBtn.textContent = `Кнопка ${labelCounterTask1 += 1}`;

    containerTask1.appendChild(newBtn);
   

}