//zadanie 1
const string1 = 'Hello';
const string2 = 'World';
const result = `${string1} ${string2}`;

//zadanie 2
const multiply = (x, y = 1) => x * y;

//zadanie 3
const average = (...args) => args.reduce((prev, curr) => prev + curr) / args.length;

//zadanie 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const avg = average(...grades);

//zadanie 5
const arr = [1, 4, 'Iwona', false, 'Nowak'];
const [,,firstname,,lastname] = arr;
