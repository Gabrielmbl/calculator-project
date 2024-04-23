const addBtn = document.querySelector("#addBtn")
const subtractBtn = document.querySelector("#subtractBtn")
const multiplyBtn = document.querySelector("#multiplyBtn")
const divideBtn = document.querySelector("#divideBtn")

const resultDiv = document.querySelector("#resultDiv")

addBtn.addEventListener("click", () => {
    const num1 = parseInt(document.querySelector("#firstNum").value)
    const num2 = parseInt(document.querySelector("#secondNum").value)
    add(num1, num2)
})

subtractBtn.addEventListener("click", () => {
    const num1 = parseInt(document.querySelector("#firstNum").value)
    const num2 = parseInt(document.querySelector("#secondNum").value)
    subtract(num1, num2)
})

multiplyBtn.addEventListener("click", () => {
    const num1 = parseInt(document.querySelector("#firstNum").value)
    const num2 = parseInt(document.querySelector("#secondNum").value)
    multiply(num1, num2)
})

divideBtn.addEventListener("click", () => {
    const num1 = parseInt(document.querySelector("#firstNum").value)
    const num2 = parseInt(document.querySelector("#secondNum").value)
    divide(num1, num2)
})



function add(num1, num2) {
    result = parseInt(num1) + parseInt(num2)
    resultDiv.textContent = result
}

function subtract(num1, num2) {
    result = parseInt(num1) - parseInt(num2)
    resultDiv.textContent = result
}

function multiply(num1, num2) {
    result = parseInt(num1) * parseInt(num2)
    resultDiv.textContent = result
}

function divide(num1, num2) {
    result = parseInt(num1) / parseInt(num2)
    resultDiv.textContent = result
}