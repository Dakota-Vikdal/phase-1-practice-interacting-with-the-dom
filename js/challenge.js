//const variable = [1,2,3];

const plus = document.querySelector("#plus")
//console.log(plus)

const minus = document.querySelector("#minus")
//console.log(minus)


plus.addEventListener("click", () => {
    plusButton();
})

function plusButton () {
    const timer = document.querySelector("#counter")
    parseInt(timer)
 
    if (timer >= 0) {
        return timer.textContent = counter++;
    } 
    
};
