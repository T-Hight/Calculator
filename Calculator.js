//Addition
const add = function(a, b, ...args) {
    let total = a + b;
    for (const arg of args) {
     total = total + arg;
    }
    return total;
   }

//Subtraction
const sub = function(a, b, ...args) {
   let total = a - b;
   for (const arg of args) {
    total = total - arg;
   }
   return total;
};

//Multiplication
const mult = function(a, b, ...args) {
    let total = a * b;
    for (const arg of args) {
      total = total * arg;
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

//Create a new function operate that takes an operator and 2 numbers 
//and then calls one of the above functions on the numbers.
const operate = function() {
    
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