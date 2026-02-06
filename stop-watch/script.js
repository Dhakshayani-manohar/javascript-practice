let [hours,minutes,seconds] =[0,0,0];
let display = document.getElementById("display");
let timer = null;


// stop-watch function
const stopWatch = () => {

    seconds++;

    if(seconds === 60){
        seconds = 0;
        minutes++;

        if(minutes === 60){
            minutes=0;
            hours++;
        }
    }

// for display time 00:00:00 by using conditional operator

let h=hours<10 ? "0"+hours : hours;
let m=minutes<10 ?"0"+minutes:minutes;
let s=seconds<10 ?"0"+seconds:seconds;
display.innerHTML = `${h}:${m}:${s}`;

}

// to set function for start the timer

function startWatch(){

    if( timer!== null){
        clearInterval(timer);
    }

    timer = setInterval(stopWatch,1000);

}
// to stop timer

function stopTimer(){
    clearInterval(timer);
    timer = null;
}
// to reset timer
function resetTimer(){
    clearInterval(timer);
    hours =0;
    minutes=0;
    seconds =0;
    timer=null;
    display.innerHTML = "00:00:00";

}