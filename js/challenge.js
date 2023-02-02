const plus = document.querySelector("#plus")

const minus = document.querySelector("#minus")


const timer = document.querySelector("#counter")

plus.addEventListener("click", () => {
    plusButton();
})

minus.addEventListener("click", () => {
    minusButton();
})

function plusButton () {
    let timerValue = parseInt(timer.textContent)
    timer.textContent = ++timerValue;    
};

function minusButton () {
    let timerValue = parseInt(timer.textContent)
    timer.textContent = --timerValue;    
};

const input = document.querySelector("#comment-input")

const ul = document.createElement("ul")

const comLocation = document.querySelector("#list")

comLocation.append(ul)

document.addEventListener("submit",
(e) => { e.preventDefault()
    const li = document.createElement("li")
    ul.append(li)  
    li.textContent = (input.value)
})

document.addEventListener("DOMContentLoaded", setInterval(plusButton, 1000))
