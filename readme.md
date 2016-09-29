#Countdown Timer using JavaScript

This is a basic timer that uses setInterval to countdown from the present moment to the desired time.  What I loved about this app was manipulating the interval of time.  Basing it off of some characters from the cartoon, Rick & Morty, you can either **Slow Down Time**:

```javascript
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
```
*As you can see, with the setInterval function, I set the new interval to decrement each second every three seconds instead of 1:1*

Stopping time was surpisingly easy! All I had to do was ad a `onclick="clearInterval(slowMo); clearInterval(time);"` to the button's html essentially stopping time whether it was slowed down or just ticking away at a normal interval.

Getting the time to start again was also dealt with in a simple manner:

```javascript
function timeWrapper(){
    clearInterval(slowMo);
    time = setInterval(
    function(){
        getNewTime('reg', clock1);
        updateCounter(clock1);
        getNewTime('reg2', clock2);
        updateCounter(clock2);
    }, 1000);
}
```

This is the same function that starts the timer when you originally load the page!  I added the `clearInterval(slowMo);` to clear the slower interval as it seemed to continue to impact regular time and made the countdown clock jumpy.


### Live Demo @ http://www.dannyarango.com/countdownTimer
