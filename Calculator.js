//Create function for displaying the numerical values of the buttons on the display
const numbers = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const currentOperand = document.querySelector('.current-operand');
const previousOperand = document.querySelector('.previous-operand');
const del = document.getElementById('clear');
const allClear = document.getElementById('all-clear')

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
const operate = function(a, b, c) {
    let output = 0;
  
    try {
  
        switch(b) {
            case '+':
                output = add(a, c)
                break;
  
            case '*':
                output = mult(a, c)
                break;
                
            case '-':
                output = sub(a, c)
                break;
  
            case '/':
                if(a === 0 || c === 0) {
                    throw "Can't divide by 0!"
                } else {
                output = div(a, c)
                }
                break;
        }
    }
    catch(e) {
        console.log("There's and error: ", e)
    }
  
    return output;
  }

//Create storage variables for display values
let storedNumber = '';
let clickedOperator = '';
let firstNumber = '';
let result = '';
currentOperand.textContent = 0;