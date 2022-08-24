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

//Task 2 Module 7

const listTask2 = document.querySelector('.list-task-2');


listTask2.addEventListener('click', onTaskBtnClick);

//Вариант 1
/* function onTaskBtnClick(e) {
    if(e.target.nodeName !== 'BUTTON') {
        return
    }
    const currentActiveBtnTask2 = document.querySelector('.btn-task-2-active');

    e.target.classList.add('btn-task-2-active');

    if(currentActiveBtnTask2) {
        currentActiveBtnTask2.classList.remove('btn-task-2-active');
    }
} */

//Вариант 2
const selectedTagTask2 = new Set();

function onTaskBtnClick(e) {
    if(e.target.nodeName !== 'BUTTON') {
        return
    }

    const isActiveTask2 = e.target.classList.contains('btn-task-2-active');

    if(isActiveTask2) {
        selectedTagTask2.delete(e.target.textContent);
    } else {
        selectedTagTask2.add(e.target.textContent);
    }

    e.target.classList.toggle('btn-task-2-active');
    

    console.log(selectedTagTask2);

}

//Task 3 colorpicker

const colors = [
    { hex: '#FF0000', rgb: '255,0,0'},
    { hex: '#00FF00', rgb: '0,255,0' },
    { hex: '#00FFFF', rgb: '0,255,255' },
    { hex: '#808080', rgb: '128,128,128' },
    { hex: '#008000', rgb: '0,128,0' },
    { hex: '#008080', rgb: '0,128,128' },
]

const colorsContainerTask3 = document.querySelector('.containerTask3');
const createColorTask3 = createColorCardMarkup(colors);

colorsContainerTask3.insertAdjacentHTML('beforeend', createColorTask3);


function createColorCardMarkup(colors) {
    return colors.map(({hex, rgb}) => {
        return `
        <div class="color-card">
            <div
                class="color-swatch"
                data-hex="${hex}"
                data-rgb="${rgb}"
                style="background-color: ${hex}" 
            ></div>
            <div class="color-meta">
                <p>HEX: ${hex}</p>
                <p>RGB: ${rgb}</p>
            </div>
        </div>
        `;
    }).join('');
};


colorsContainerTask3.addEventListener('click', onColorClickTask3);

function onColorClickTask3(e) {
    if(!e.target.classList.contains('color-swatch')) {
        return
    }

console.log(e.target);
}


// Болтливые события Таск 4

const jsCursorMousmooveTask4 = document.querySelector('.js-cursor-task-4');
let mouseMooveCounterTask4 = 0;

window.addEventListener('mousemove', _.throttle(onMouseMoveCounterTask4, 500));

function onMouseMoveCounterTask4(e) {
    mouseMooveCounterTask4 += 1;

    jsCursorMousmooveTask4.textContent = `
    Количество вызовов onMouseMooveTask4: ${mouseMooveCounterTask4}
    X: ${e.clientX}
    Y: ${e.clientY}
    `;
}

const jsInputChangeTask4 = document.querySelector('.js-input-task-4');
const jsOutputChangeTask4 = document.querySelector('.js-output-change-task-4');


jsInputChangeTask4.addEventListener('input', _.debounce(onJsInputChangeTask4, 500));
let jsInputChangeCounterTask4 = 0;


function onJsInputChangeTask4(e) {
    jsInputChangeCounterTask4 += 1;

    jsOutputChangeTask4.textContent = `
    Количество вызовов onInputChangeTask4: ${jsInputChangeCounterTask4},
    Значение: ${e.target.value}
    `;
}

//ТАск 5 Что ищем?. Фильтр.

const itemsFilterTask5 = [
    { label: 'Html' },
    { label: 'Css' },
    { label: 'Redux' },
    { label: 'Reakt' },
    { label: 'Javascript' },
    { label: 'GraphQl' },
    { label: 'MongoDb' },
    { label: 'PosgreSql' },
];

const refsTaskt5 = {
    inputTask5: document.querySelector('.input-task-5'),
    listTask5: document.querySelector('.list-task-5'),
};


const resultCreatListTask5 = createListTask5(itemsFilterTask5);
refsTaskt5.listTask5.innerHTML = resultCreatListTask5;

function createListTask5(items) {
    return items.map(item => `<li>${item.label}</li>`).join('');
}

refsTaskt5.inputTask5.addEventListener('input', onSearchFilterListTask5);

function onSearchFilterListTask5(e) {

    const filterTextTask5 = e.target.value.toLowerCase();
    console.log(filterTextTask5);

    const newItemsFilterTask5 = itemsFilterTask5.filter(i => 
        i.label.toLowerCase().includes(filterTextTask5));
    
    const newResultCreatListTask5 = createListTask5(newItemsFilterTask5);
    refsTaskt5.listTask5.innerHTML = newResultCreatListTask5;
}