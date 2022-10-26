// mi manera de hacerlo (se creo antes de ver el video de la clase)
// ya viendo la clase el profesor hiso lo mismo pero con funciones normales sin arrow function



var sum = (num1, num2) => num1 + num2;

var rest = (num1, num2) => num1 - num2;

var mult = (num1, num2) => num1 * num2;

var div = (num1, num2) => num1 / num2;

var oper = (num1, num2, callback) => callback(num1, num2);

console.log(oper(5, 3, div));


// lo que se vio en la clase y no hice yo

//setTimeout

setTimeout(function () {
    console.log('Hola JS');
}, 5000);


function gretting (name) {
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'Oscar');    // primero va la funcion callback, luego el tiempo en milisegundos y al final los argumentos.


