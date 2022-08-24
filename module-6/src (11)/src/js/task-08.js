const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', onSendFormSubmit);

function onSendFormSubmit(e) {
    e.preventDefault();
    const {email, password} = e.currentTarget.elements;

    if(email.value === '' || password.value === '') {
        return alert('Заполни все поля');
    }


    let formData = new FormData(e.currentTarget);
    formData.forEach((value, name) => {
       
        console.log(name, value);

    })

    
    /* console.log(formData);
    console.log(email.value);
    console.log(password.value); */

    e.currentTarget.reset();
        
}



/* Обработка отправки формы form.login-form должна быть по 
событию submit.

При отправке формы страница не должна перезагружаться.

Если в форме есть незаполненные поля, выводи alert с 
предупреждением о том, что все поля должны быть заполнены.

Если пользователь заполнил все поля и отправил форму, 
собери значения полей в обьект, где имя поля будет именем свойства, 
а значение поля - значением свойства. Для доступа к элементам формы 
используй свойство elements.

Выведи обьект с введенными данными в консоль и очисти 
значения полей формы методом reset. */
