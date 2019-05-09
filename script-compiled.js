'use strict';

//zadanie 1
var string1 = 'Hello';
var string2 = 'World';
var result = string1 + ' ' + string2;

//zadanie 2
var multiply = function multiply(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return x * y;
};

//zadanie 3
var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (prev, curr) {
    return prev + curr;
  }) / args.length;
};

//zadanie 4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
var avg = average.apply(undefined, grades);

//zadanie 5
var arr = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = arr[2],
    lastname = arr[4];
