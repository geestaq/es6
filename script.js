const sayHello = () => alert('Hello world!');
sayHello();

let greeting = 'Hello User!';
function greetWorld(isGreeting) {
    if (isGreeting) {
        let greeting = 'Hello World!';
        return greeting;
    }
    return greeting;
}
greetWorld(false); // 'Hello User!'

{  // rozpoczęcie bloku
    let hello = 'test';
}  // zakończenie bloku

function sayHelloTo(person) {
    console.log(`Hello, ${person}, nice to meet you!`);
}
