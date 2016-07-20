// Get current time in milliseconds (Unix epoch)

var rioStart = new Date('August 5, 2016 19:00').getTime();
var deathStart = new Date('January 20, 2017 19:00').getTime();
var secondsInAnHour = 60 * 60;
var secondsInADay = 60 * 60 * 24;
var secondsInAWeek = secondsInADay * 7;
var clock1Gone = document.getElementById("countdown-timer1");
var clock2Gone = document.getElementById("countdown-timer2")



function updateCounter(endDate, timer){
    var secondsDigit = timer.querySelector('.seconds-number');
    var minutesDigit = timer.querySelector('.minutes-number');
    var hoursDigit = timer.querySelector('.hours-number');
    var daysDigit = timer.querySelector('.days-number');
    var weeksDigit = timer.querySelector('.weeks-number');
    var now = Date.now();
    var getTimeTill = (endDate - now) / 1000;
    // var rioStart = Date.parse('August 5, 2016');
    // Get various units of time until event
    var seconds = Math.floor(getTimeTill % 60);
    var minutes = Math.floor(getTimeTill / 60) % 60;
    var hours = Math.floor(getTimeTill / secondsInAnHour) % 24;
    var days = Math.floor(getTimeTill / secondsInADay) % 7;
    var weeks = Math.floor(getTimeTill / secondsInAWeek) % 52;
    secondsDigit.innerHTML = seconds;
    minutesDigit.innerHTML = minutes;
    hoursDigit.innerHTML = hours;
    daysDigit.innerHTML = days;
    weeksDigit.innerHTML = weeks;
    console.log(seconds);
}

// function updateCounter2(endDate){
//     var countdownTimer = document.getElementById('countdown-timer2');
//     var secondsDigit = countdownTimer.querySelector('.seconds-number');
//     var minutesDigit = countdownTimer.querySelector('.minutes-number');
//     var hoursDigit = countdownTimer.querySelector('.hours-number');
//     var daysDigit = countdownTimer.querySelector('.days-number');
//     var weeksDigit = countdownTimer.querySelector('.weeks-number');
//     var now = Date.now();
//     var getTimeTill = (endDate - now) / 1000;
//     // var rioStart = Date.parse('August 5, 2016');
// // Get various units of time until event
//     var seconds = Math.floor(getTimeTill % 60);
//     var minutes = Math.floor(getTimeTill / 60) % 60;
//     var hours = Math.floor(getTimeTill / secondsInAnHour) % 24;
//     var days = Math.floor(getTimeTill / secondsInADay) % 7;
//     var weeks = Math.floor(getTimeTill / secondsInAWeek) % 52;
//     secondsDigit.innerHTML = seconds;
//     minutesDigit.innerHTML = minutes;
//     hoursDigit.innerHTML = hours;
//     daysDigit.innerHTML = days;
//     weeksDigit.innerHTML = weeks;
// }

function Visibility(){
    clock1Gone.style.visibility = "hidden";
    clock2Gone.style.visibility = "hidden";
}
// function Timer1Visible(f){
//     if(f == true){
//         document.getElementById("countdown-timer").style.visibility = "visible";
//     }
// }
function TimerVisible(clock1, clock2){
    if (clock1.style.visibility == "visible" && clock2.style.visibility == "hidden"){
        clock1.style.visibility = "hidden";
    }else if(clock1.style.visibility == "hidden" && clock2.style.visibility == "hidden") {
        clock1.style.visibility = "visible";
    }else if(TimerVisible(clock2, clock1)){
        clock1.style.visibility = "visible";
    }
}
// set the HTML of the given unit with the new amount


    // Alternative ways of grabbing DOM items:
    // console.log(document.getElementsByClassName('weeks-number')[0]);
    // console.log(document.getElementsByTagName('span')[0]);

// Call the setInterval function which will update our counter ever second
Visibility();
setInterval(updateCounter(rioStart, clock1Gone), 1000);
// setInterval(updateCounter(deathStart, clock2Gone), 1000);
