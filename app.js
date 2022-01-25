const counter = document.getElementById("counter");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
let count = 0;
counter.textContent = count;


increase.addEventListener("click", function(){
    count ++;
    if(count === 0) counter.style.color = "black" // Refactorizar en un futuro!
    if(count > 0) counter.style.color = "green";
    counter.textContent = count;
    
})

decrease.addEventListener("click", function(){
    
    count --;
    if(count === 0) counter.style.color = "black"
    if(count < 0) counter.style.color = "red";
    counter.textContent = count;
    
})

reset.addEventListener("click", function(){
    count = 0;
    if(count == 0) counter.style.color = "black";
    counter.textContent = count;
    
})

    
    
    
    



