// Variables
// Btns
const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

// Timer
const timer = document.getElementById("timer");

// Time vals
let seconds = 0;
let minutes = 0;
let hours = 0;

// Leading Zeros
let leadingSeconds, leadingMinutes, leadingHours;

// Set Interval + Timer Status
let timerInterval = null;
let timerStatus = "stopped";

// Stop watch functionality
function stopWatch() {
    seconds++;
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    leadingSeconds = (seconds < 10) ? `0${seconds.toString()}` : seconds;
    leadingMinutes = (minutes < 10) ? `0${minutes.toString()}` : minutes;
    leadingHours = (hours < 10) ? `0${hours.toString()}` : hours;

    let displayTimer = timer.innerText = 
    `${leadingHours}:${leadingMinutes}:${leadingSeconds}`;
}

// Event Listeners
startStopBtn.addEventListener('click', start);
resetBtn.addEventListener('click', reset);

function start() {
   if (timerStatus === "stopped") {
        timerInterval = window.setInterval(stopWatch, 1000);
        startStopBtn.innerHTML = '<i class="fa-solid fa-pause" id="pause"></i>';
        timerStatus = "started";
   }

   else {
        window.clearInterval(timerInterval);
        startStopBtn.innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
        timerStatus = "stopped";
    }
}

function reset() {
    window.clearInterval(timerInterval);
    let zeros = [0, 0, 0];
    [seconds, minutes, hours] = zeros;

    timer.innerHTML = "00:00:00";
}
