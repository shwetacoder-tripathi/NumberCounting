const increaseButton = document.getElementById("increaseBtn");
const resetButton = document.getElementById("resetBtn");
const decreaseButton = document.getElementById("decreaseBtn");
const counterLable = document.getElementById("countLable");
let count = 0;
increaseButton.onclick =function(){
    count++;
    counterLable.textContent =count
}
resetButton.onclick = function(){
    count = 0;
    counterLable.textContent = count;
}
decreaseButton.onclick = function(){
    count--;
    counterLable.textContent = count;
}