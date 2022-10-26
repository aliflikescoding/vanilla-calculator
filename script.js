/* Non Action Buttons */
let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let four = document.querySelector('#four');
let five = document.querySelector('#five');
let six = document.querySelector('#six');
let seven = document.querySelector('#seven');
let eight = document.querySelector('#eight');
let nine = document.querySelector('#nine');
let zero = document.querySelector('#zero');
let dot = document.querySelector('#dot');

/* Action Buttons */
let clear = document.querySelector('#clear');
let backSpace = document.querySelector('#backspace');
let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let times = document.querySelector('#times');
let divide = document.querySelector('#divide');
let equal = document.querySelector('#equal');
let mode = document.querySelector('#color-mode');

/* User Variables */

/* events */
one.addEventListener('click', () => {
    addToString(1);
});
two.addEventListener('click', () => {
    addToString(2);
});
three.addEventListener('click', () => {
    addToString(3);
});
four.addEventListener('click', () => {
    addToString(4);
});
five.addEventListener('click', () => {
    addToString(5);
});
six.addEventListener('click', () => {
    addToString(6);
});
seven.addEventListener('click', () => {
    addToString(7);
});
eight.addEventListener('click', () => {
    addToString(8);
});
nine.addEventListener('click', () => {
    addToString(9);
});
zero.addEventListener('click', () => {
    addToString(0);
});
dot.addEventListener('click', () => {
    addToString('.');
});

/* functions */
