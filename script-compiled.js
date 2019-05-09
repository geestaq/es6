'use strict';

var sayHello = function sayHello() {
    return alert('Hello world!');
};
sayHello();

var greeting = 'Hello User!';
function greetWorld(isGreeting) {
    if (isGreeting) {
        var _greeting = 'Hello World!';
        return _greeting;
    }
    return greeting;
}
greetWorld(false); // 'Hello User!'

{
    // rozpoczęcie bloku
    var hello = 'test';
} // zakończenie bloku

function sayHelloTo(person) {
    console.log('Hello, ' + person + ', nice to meet you!');
}
