//Create function for displaying the numerical values of the buttons on the display
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const currentOperand = document.querySelector('.current-operand');
const previousOperand = document.querySelector('.previous-operand');
const del = document.getElementById('clear');
const allClear = document.getElementById('all-clear');
const equals = document.getElementById('equal');
const decimal = document.getElementById('decimal');

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
  
        switch(c) {
            case '+':
                output = add(a, b)
                break;
  
            case '*':
                output = mult(a, b)
                break;
                
            case '-':
                output = sub(a, b)
                break;
  
            case '/':
                if(a === '0' || b === '0') {
                    throw "Can't divide by 0!"
                } else {
                output = div(a, b)
                }
                break;
        }
    }
    catch(e) {
        console.log("There's an error: ", e)
    }
  
    return output;
  }

//Create storage variables for display values
let storedNumber = '';
let Operator = '';
let firstNumber = '';
let result = '';
previousOperand.textContent = '';
currentOperand.textContent = 0;

//Add event listener to display and store number buttons
numbers.forEach((number) => {
    number.addEventListener('click', function() {
        storedNumber += number.value;
        currentOperand.textContent = storedNumber;
    })
})

//Add event listener to display and store operator buttons
operators.forEach((operator) => {
    operator.addEventListener('click', function() {
        if (Operator !== '') {
            updateDisplay();
        }
        if (result) {
            storedNumber = result; 
        }
        
        firstNumber = storedNumber;
        Operator = operator.value;
        previousOperand.textContent = (firstNumber + ' ' + Operator);
        storedNumber = '';
        decimal.disabled = false;
    })
})

//Add event listener to refresh display
allClear.addEventListener('click', function(){
    storedNumber = '';
    Operator = '';
    firstNumber = '';
    result = '';
    previousOperand.textContent = '';
    currentOperand.textContent = 0;
    decimal.disabled = false;
})

//Add event listener for the decimal button
decimal.addEventListener('click', function(e) {
    if (e.target.innerHTML === '.') {
        decimal.disabled = true;
    }
})

//Add event listener to delete the last number value chosen
del.addEventListener('click', function() {
    currentOperand.textContent = currentOperand.textContent.slice(0, -1);
    storedNumber = currentOperand.textContent;
})

//Add event listener for the equal button
equals.addEventListener('click', function() {
    displayResult();
})

//Add function to return result
function displayResult() {
    result = roundNumber(operate(parseFloat(firstNumber), parseFloat(storedNumber), Operator));

    currentOperand.textContent = result;
    previousOperand.textContent = (firstNumber + ' ' + Operator + ' ' + storedNumber + ' ' + '=');
}

//Add function to update display with multiple operands
function updateDisplay() {
    result = roundNumber(operate(parseFloat(firstNumber), parseFloat(storedNumber), Operator));
  }

//Add function to round numbers to one decimal point
function roundNumber(number) {
    return Math.round(number * 10) / 10;
}
