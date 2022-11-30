/* FIRST WAY TO DO:

const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

function handleClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        document.querySelector(".screen1").classList.add("hide")
        document.querySelector(".screen2").classList.remove("hide")

        document.querySelector(".screen2 h2").innerText = `You got it right in ${xAttempts} attempts!`
    }

    xAttempts++
}
 */

/* SECOND WAY TO DO: */

// Variables
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Events
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener("keydown", function(e) {
    if(e.key == "Enter" && screen1.classList.contains("hide")) {
        handleResetClick()
    }
})

// Callback Function
function handleTryClick(event) {
    event.preventDefault() /* This command means: Do not default this Event. The default for a button inside the form is: submit the form (submit, send). */ 

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()

        document.querySelector(".screen2 h2").innerText = `You got it right in ${xAttempts} attempts!`
        /* Other way to do: screen2.querySelector("h2").innerText = `You got it right in ${xAttempts} attempts!` */
    }

    inputNumber.value = ""
    xAttempts++
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}




