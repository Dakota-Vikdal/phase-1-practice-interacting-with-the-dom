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

let timerStart = setInterval(plusButton, 1000)

const heart = document.querySelector("#heart")

heart.addEventListener("click", () =>  {
    const notification = document.createElement("li")
    const ul = document.querySelector(".likes")
     ul.append(notification)
     let timerValue = parseInt(timer.textContent)
     notification.textContent = `${timerValue}, has been liked`
})
