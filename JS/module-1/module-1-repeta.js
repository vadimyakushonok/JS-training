// Напиши скрипт выбора стоимости отеля по количеству звезд
// 1 - 20 2 - 30 3 - 50 4 - 70 5 - 120
// если в переменной stars что то кроме чисел 1-5 то выведи строку
//`Такого отеля нет`

/* const stars = prompt('введи количесво звезд');

let price;

switch(stars) {
    case '1':
        price = 20;
        break;

    case '2':
        price = 30;
        break;

    case '3':
        price = 50;
        break;

    case '4':
        price = 70;
        break;

    case '5':
        price = 120;
        break;

    default:
        console.log('Такого отеля нет')
}

console.log(price); */

// 1-самовывоз 2 - куръер  3 - почта
// в переменную message записать строку в зависимости от выбранной опции
// 'Вы сможете забрать товар завтра'
// 'Курьер доставит завтра'
// 'Посылка будет отправлена сегодня'
// 'Вам перезвнит менеджер'

const option = 3;
let message;

switch(option) {
    case 1:
        message = 'Вы сможете забрать товар завтра';
        break;

    case 2:
        message = 'Курьер доставит завтра';
        break;

    case 3:
        message = 'Посылка будет отправлена сегодня';
        break;

    default:
        message = 'Вам перезвонит менеджер';
}

console.log(message);