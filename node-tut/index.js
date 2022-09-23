const validator = require("validator");

const validEmail = email => validator.isEmail(email);

console.log('is mango@mail.com valid Email: ', validEmail('mango@gmail.com'));
console.log('is hsbhbhbhjsbhj valid Email: ', validEmail('hsbhbhbhjsbhj'));
