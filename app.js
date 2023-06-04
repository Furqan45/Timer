var sec = 0;
var min = 0;
var hour = 0;
var targetTime = 0;
var remainingTime = 0;

var hourVal = document.getElementById("hour");
var minVal = document.getElementById("min");
var secVal = document.getElementById("sec");
var StartButton = document.getElementById("startBtn");
var StopButton = document.getElementById("stopBtn");

var interval;

function renderVal() {
    secVal.innerHTML = sec;
    minVal.innerHTML = min;
    hourVal.innerHTML = hour;
}

function timestart() {
    StartButton.disabled = true;
    StopButton.disabled = false;

    sec--;
    if (sec < 0) {
        min--;
        sec = 59;
        if (min < 0) {
            hour--;
            min = 59;
        }
    }
    
    remainingTime--;
    if (remainingTime <= 0) {
        stoptimer();
        renderVal();
        return;
    }

    renderVal();
}

function timer() {
    targetTime = parseInt(prompt("Enter the time in seconds:"));
    if (isNaN(targetTime) || targetTime <= 0) {
        alert("Invalid time entered. Please enter a positive number.");
        return;
    }

    hour = Math.floor(targetTime / 3600);
    min = Math.floor((targetTime % 3600) / 60);
    sec = targetTime % 60;
    remainingTime = targetTime;

    interval = setInterval(function () {
        timestart();
    }, 1000);
}

function stoptimer() {
    StopButton.disabled = true;
    StartButton.disabled = false;
    clearInterval(interval);
}

function resettimer() {
    sec = 0;
    min = 0;
    hour = 0;
    targetTime = 0;
    remainingTime = 0;
    stoptimer();
    renderVal();
}
