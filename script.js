const clickarea = document.getElementById("click-area");
const clickDisplay = document.getElementById("clickDisplay");
const secondsLeft = document.getElementById("countdown");
const cps = document.getElementById("avgClicks");
const resetBtn = document.getElementById("resetBtn");
var clicks = 0;
var activeClick = false;
var timeLeft = 5;
var gameOver = false;

function addListAfterClick () {
    if (inputLength() > 0) {
        console.log("Click works");
        createList();
    }else{
        console.log("Input empty")
    }
}

function clickCounter () {
    clicks++;
    clickDisplay.innerHTML = clicks;
    clickarea.style.transformOrigin = "center";
    clickarea.style.animation = "pop 0.1s linear 1";
}

function makeAlert() {
    gameOver = true;
    activeClick = false;
    var clicksperSec = clicks / 5;
    cps.innerHTML = clicksperSec;
    clickarea.style.display = "none";
    resetBtn.disabled = true;
    setTimeout(function(){resetBtn.disabled = false;}, 2000);
    resetBtn.style.display = "flex";
}

function clickCountdown () {
    clickarea.style.background = "rgb(28, 16, 88)"
    clickarea.children[0].innerHTML = "Lets go";
    activeClick = true;
    console.log("ClickCountdown acitve")
    countdown();
    setTimeout(makeAlert, 5100);
}

function countdown(){
    if (timeLeft >= 0){
        secondsLeft.innerHTML = timeLeft;
        setTimeout(countdown, 1000);
    }
    timeLeft--;
};

function clickHandler () {
    if (gameOver === false){
        if (activeClick === false) {
            clickCountdown();
            console.log("Started countdown");
        } else if (activeClick === true) {
            clickCounter();
        }
    }
    
    
    console.log("ClickHandler acitve")
}

function gameStatus (){
    gameOver = false;
    clickarea.children[0].innerHTML = "Click me to start";
    clickarea.style.background = "rgb(65, 42, 182)"
    clicks = 0;
    clickDisplay.innerHTML = clicks;
    timeLeft = 5;
    secondsLeft.innerHTML = timeLeft;
    setTimeout(() => {resetBtn.style.display = "none";}, 100);
    setTimeout(() => {clickarea.style.display = "flex";}, 100)
}

clickarea.addEventListener("click", clickHandler);

resetBtn.addEventListener("click", gameStatus);