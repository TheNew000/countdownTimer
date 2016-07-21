// Get current time in milliseconds (Unix epoch)

var rioStart = new Date('August 5, 2016 19:00').getTime();
var deathStart = new Date('January 20, 2017 19:00').getTime();
var secondsInAnHour = 60 * 60;
var secondsInADay = 60 * 60 * 24;
var secondsInAWeek = secondsInADay * 7;
var clock1 = document.getElementById("countdown-timer1");
var clock2 = document.getElementById("countdown-timer2")
var now = Date.now();
var slowMo;
var time;

function getNewTime(type, clock){
    if (type === 'reg' && clock === clock1){
        now = (rioStart - Date.now()) / 1000;
    }else if(type === 'slomo' && clock === clock1){
        now = --now;
    }else if (type === 'reg2' && clock === clock2){
        now = (deathStart - Date.now()) / 1000;
    }else if(type === 'slomo' && clock === clock2){
        now = --now;
    }
};

function updateCounter(timer){
    var secondsDigit = timer.querySelector('.seconds-number');
    var minutesDigit = timer.querySelector('.minutes-number');
    var hoursDigit = timer.querySelector('.hours-number');
    var daysDigit = timer.querySelector('.days-number');
    var weeksDigit = timer.querySelector('.weeks-number');
    // var rioStart = Date.parse('August 5, 2016');
    // Get various units of time until event
    var seconds = Math.floor(now % 60);
    var minutes = Math.floor(now / 60) % 60;
    var hours = Math.floor(now / secondsInAnHour) % 24;
    var days = Math.floor(now / secondsInADay) % 7;
    var weeks = Math.floor(now / secondsInAWeek) % 52;
    secondsDigit.innerHTML = seconds;
    minutesDigit.innerHTML = minutes;
    hoursDigit.innerHTML = hours;
    daysDigit.innerHTML = days;
    weeksDigit.innerHTML = weeks;
}

// function updateCounter2(endDate){
//     var countdownTimer = document.getElementById('countdown-timer2');
//     var secondsDigit = countdownTimer.querySelector('.seconds-number');
//     var minutesDigit = countdownTimer.querySelector('.minutes-number');
//     var hoursDigit = countdownTimer.querySelector('.hours-number');
//     var daysDigit = countdownTimer.querySelector('.days-number');
//     var weeksDigit = countdownTimer.querySelector('.weeks-number');
//     var now = Date.now();
//     var now = (endDate - now) / 1000;
//     // var rioStart = Date.parse('August 5, 2016');
// // Get various units of time until event
//     var seconds = Math.floor(now % 60);
//     var minutes = Math.floor(now / 60) % 60;
//     var hours = Math.floor(now / secondsInAnHour) % 24;
//     var days = Math.floor(now / secondsInADay) % 7;
//     var weeks = Math.floor(now / secondsInAWeek) % 52;
//     secondsDigit.innerHTML = seconds;
//     minutesDigit.innerHTML = minutes;
//     hoursDigit.innerHTML = hours;
//     daysDigit.innerHTML = days;
//     weeksDigit.innerHTML = weeks;
// }

function Visibility(){
    clock1.style.display = "none";
    clock2.style.display = "none";
}
// function Timer1Visible(f){
//     if(f == true){
//         document.getElementById("countdown-timer").style.visibdisplayility = "visible";
//     }
// }
function TimerVisible(firstClock, secondClock){
    if (firstClock.style.display === "none" && secondClock.style.display === "block"){
        secondClock.style.display = "none";
        firstClock.style.display = "block";
    }else if(firstClock.style.display == "block"){
        firstClock.style.display = "none";
    }else if(firstClock.style.display == "none") {
        firstClock.style.display = "block";
    }
}
// set the HTML of the given unit with the new amount


    // Alternative ways of grabbing DOM items:
    // console.log(document.getElementsByClassName('weeks-number')[0]);
    // console.log(document.getElementsByTagName('span')[0]);

// Call the setInterval function which will update our counter ever second

function slowMoWrapper(clock){
        clearInterval(time);
        if(clock === clock1){
            now = (rioStart - Date.now()) / 1000;
        }else{
            now = (deathStart - Date.now()) / 1000;
        }
        slowMo = setInterval(
        function(){
            getNewTime('slomo', clock);
            updateCounter(clock);
        }, 3000);
};

function timeWrapper(){
    time = setInterval(
    function(){
        getNewTime('reg', clock1);
        updateCounter(clock1);
        getNewTime('reg2', clock2);
        updateCounter(clock2);
    }, 1000);
    clearInterval(slowMo);
}

timeWrapper();
Visibility();
