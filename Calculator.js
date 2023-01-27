const one = document.getElementById('one').addEventListener('click', function(){
    alert('click')
});
const two = document.getElementById('two').addEventListener('click', function(){
    alert('click')
});
const three = document.getElementById('three').addEventListener('click', function(){
    alert('click')
});
const four = document.getElementById('four').addEventListener('click', function(){
    alert('click')
});
const five = document.getElementById('five').addEventListener('click', function(){
    alert('click')
});
const six = document.getElementById('six').addEventListener('click', function(){
    alert('click')
});
const seven = document.getElementById('seven').addEventListener('click', function(){
    alert('click')
});
const eight = document.getElementById('eight').addEventListener('click', function(){
    alert('click')
});
const nine = document.getElementById('nine').addEventListener('click', function(){
    alert('click')
});
const zero = document.getElementById('zero').addEventListener('click', function(){
    alert('click')
});
const allClear = document.getElementById('all-clear').addEventListener('click', function(){
    alert('click')
});
const clear = document.getElementById('clear').addEventListener('click', function(){
    alert('click')
});
const percent = document.getElementById('percent').addEventListener('click', function(){
    alert('click')
});
const divide = document.getElementById('divide').addEventListener('click', function(){
    alert('click')
});
const multiply = document.getElementById('multiply').addEventListener('click', function(){
    alert('click')
});
const minus = document.getElementById('minus').addEventListener('click', function(){
    alert('click')
});
const plus = document.getElementById('plus').addEventListener('click', function(){
    alert('click')
});
const decimal = document.getElementById('decimal').addEventListener('click', function(){
    alert('click')
});
const equal = document.getElementById('equal').addEventListener('click', function(){
    alert('click')
});
//Addition
const add = function(...args) {
    let sumArray = 0;
    for (const arg of args) {
     sumArray += arg;
    }
    return sumArray;
   }

//Subtraction
const subtract = function(a, b, ...args) {
   let total = a - b;
   for (const arg of args) {
    total = total - arg;
   }
   return total;
};

//Multiplication
const mult = function(...args) {
    let total = 1;
    for (const arg of args) {
      total *= arg;
    }
    return total;
  }

//Division
const div = function(a, b, ...args) {
    let total = a / b;
    for(const arg of args) {
        total = total / arg;
    }
    return total;
}

//assign numerical values to the number buttons

//assign mathematical functions to the symbol buttons

//Create function for displaying the numerical values of the buttons on the display
let buttons = document.querySelectorAll('.number');
let input = document.getElementById('myInput');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(e) {
        input.value = e.target.value;
    })
}