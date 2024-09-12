const startDate = new Date().getTime();
const endDate = startDate+864000000;
const totalTime = endDate-startDate;

function updateTimer(){

const now = new Date().getTime();

const timePassed = now - startDate;
const timeLeft = endDate - now;

const dayss = timeLeft/(1000*60*60*24);
const days = Math.floor(dayss);

const hourss = (dayss - days)*24;
const hours = Math.floor(hourss);

const minss = (hourss - hours)*60;
const mins = Math.floor(minss);

const secss = (minss - mins)*60;
const secs = Math.floor(secss);


document.getElementById("days").innerHTML=days;
document.getElementById("hours").innerHTML=hours;
document.getElementById("mins").innerHTML=mins;
document.getElementById("secs").innerHTML=secs;

const progress = ((now-startDate)/(endDate-startDate))*100;

document.getElementById("progressbar").style.width = progress + "%";

}

setInterval(updateTimer,1000);