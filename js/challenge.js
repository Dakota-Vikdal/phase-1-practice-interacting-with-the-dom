//const variable = [1,2,3];

const plus = document.querySelector("#plus")
//console.log(plus)

const minus = document.querySelector("#minus")


const timer = document.querySelector("#counter")
//timer.textContent = 55641
//console.log(timer.textContent)

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



