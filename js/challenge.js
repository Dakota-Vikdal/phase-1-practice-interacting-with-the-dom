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

function plusButton () {
    let timerValue = parseInt(timer.textContent)
    console.log("timer", timerValue)
    timer.textContent = ++timerValue;    
};
