const inputEl = document.getElementById("input")
const btnEl = document.getElementById("btn")

let conversationRate = [3.281, 0.3048, 0.264, 3.785, 2.204, 0.4535]

const meterInputValue = document.getElementById("meters-input-value")
const feetInputValue = document.getElementById("feets-input-value")
const feetsResult = document.getElementById("feets-result")
const metersResult = document.getElementById("meters-result")

const literInputValue = document.getElementById("liters-input-value")
const gallonInputValue = document.getElementById("gallons-input-value")
const gallonResult = document.getElementById("gallons-result")
const literResult = document.getElementById("liters-result")

const kiloInputValue = document.getElementById("kilos-input-value")
const poundInputValue = document.getElementById("pounds-input-value")
const poundResult = document.getElementById("pounds-result")
const kiloResult = document.getElementById("kilos-result")



btnEl.addEventListener("click", function () {
    let inputNumber = Number(inputEl.value)
    renderLenghtConverting(inputNumber)
    renderVolumeConverting(inputNumber)
    renderMassConverting(inputNumber)
})

function renderLenghtConverting(inputNumber) {
    meterInputValue.innerText = inputNumber
    feetInputValue.innerText = inputNumber
    feetsResult.innerText = (inputNumber * conversationRate[0]).toFixed(3)
    metersResult.innerText = (inputNumber * conversationRate[1]).toFixed(3)
}

function renderVolumeConverting(inputNumber) {
    literInputValue.innerText = inputNumber
    gallonInputValue.innerText = inputNumber
    gallonResult.innerText = (inputNumber * conversationRate[2]).toFixed(3)
    literResult.innerText = (inputNumber * conversationRate[3]).toFixed(3)
}

function renderMassConverting(inputNumber) {
    kiloInputValue.innerText = inputNumber
    poundInputValue.innerText = inputNumber
    poundResult.innerText = (inputNumber * conversationRate[4]).toFixed(3)
    kiloResult.innerText = (inputNumber * conversationRate[5]).toFixed(3)
}