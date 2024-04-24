// Operation buttons query selectors
const addBtn = document.querySelector("#addBtn")
const subtractBtn = document.querySelector("#subtractBtn")
const multiplyBtn = document.querySelector("#multiplyBtn")
const divideBtn = document.querySelector("#divideBtn")
const clearBtn = document.querySelector("#clearBtn")
const equalsBtn = document.querySelector("#equalsBtn")

// Divs query selectors
const numbersDiv = document.querySelector("#numbersDiv")
const resultDiv = document.querySelector("#resultDiv")
const displayDiv = document.querySelector("#displayDiv")


// Loop for adding number digits
for (let i = 9; i >= 0; i--) {
    const button = document.createElement("button");
    button.textContent = i;
    numbersDiv.appendChild(button);
}


let displayValue = ""
let num1 = ""
let num2 = ""
let currentOperation = ""


// Event listener for adding to the number on display value
numbersDiv.addEventListener("click", (event) => {
    const clickedButton = event.target
    const buttonValue = clickedButton.textContent
    displayValue += buttonValue
    console.log(`displayValue = ${displayValue}`)
    displayDiv.textContent = displayValue
});


// Clear display value
clearBtn.addEventListener("click", () => {
    displayValue = ""
    console.log(`displayValue = ${displayValue}`)
    displayDiv.textContent = displayValue
})

// Listener for when add button is clicked
addBtn.addEventListener("click", () => {
    // if (num1 != "") {
    //     num2 = displayValue
    //     num1 = operate(num1, num2, "add")
    //     num2 = ""

    //     displayValue = num1
    //     displayDiv.textContent = displayValue
    // }

    // else {
    //     num1 = parseInt(displayValue)
    //     console.log(`num1 = ${num1}`)
    //     displayValue = ""
    //     displayDiv.textContent = displayValue
    //     currentOperation = "add"
    // }

    num1 = parseInt(displayValue)
    console.log(`num1 = ${num1}`)
    displayValue = ""
    displayDiv.textContent = displayValue
    currentOperation = "add"
})

// Listener for when subtract button is clicked
subtractBtn.addEventListener("click", () => {
    num1 = parseInt(displayValue)
    console.log(`num1 = ${num1}`)
    displayValue = ""
    displayDiv.textContent = displayValue
    currentOperation = "subtract"
})

// Listener for when multiply button is clicked
multiplyBtn.addEventListener("click", () => {
    num1 = parseInt(displayValue)
    console.log(`num1 = ${num1}`)
    displayValue = ""
    displayDiv.textContent = displayValue
    currentOperation = "multiply"
})

// Listener for when divide button is clicked
divideBtn.addEventListener("click", () => {
    num1 = parseInt(displayValue)
    console.log(`num1 = ${num1}`)
    displayValue = ""
    displayDiv.textContent = displayValue
    currentOperation = "divide"
})

// Listener for when equals button is clicked
equalsBtn.addEventListener("click", () => {
    num2 = parseInt(displayValue)
    console.log(`num2 = ${num2}`)
    displayValue = ""
    displayDiv.textContent = displayValue

    result = operate(num1, num2, currentOperation)
    console.log(`result = ${result}`)
    displayValue = result
    displayDiv.textContent = displayValue
    currentOperation = ""
    num1 = ""
    num2 = ""
})



// Operations
function add(num1, num2) {
    console.log(`num1 = ${num1}`)
    console.log(`num2 = ${num2}`)
    result = parseInt(num1) + parseInt(num2)
    console.log(`addition helper = ${result}`)
    return result
}

function subtract(num1, num2) {
    result = parseInt(num1) - parseInt(num2)
    return result
}

function multiply(num1, num2) {
    result = parseInt(num1) * parseInt(num2)
    return result
}

function divide(num1, num2) {
    result = parseInt(num1) / parseInt(num2)
    return result
}

function operate(num1, num2, operation) {
    let result = 0

    if (operation == "add") {
        result = add(num1, num2)
        console.log(`result of addition = ${result}`)
        return result
    }

    if (operation == "subtract") {
        result = subtract(num1, num2)
        console.log(`result of subtraction = ${result}`)
        return result
    }

    if (operation == "multiply") {
        result = multiply(num1, num2)
        console.log(`result of multiplication = ${result}`)
        return result
    }

    if (operation == "divide") {
        result = divide(num1, num2)
        console.log(`result of division = ${result}`)
        return result
    }
}