
const daysEL= document.getElementById('days');
const hoursEL= document.getElementById('hours');
const minEL= document.getElementById('min');
const secondsEL= document.getElementById('seconds');

const newYears = "1 Jan 2023";
function countDown() {
const newYearDate = new Date(newYears);
const currentDate = new Date();
const totalsecondsleft=(newYearDate-currentDate)/1000;
const days =Math.floor(totalsecondsleft/3600/24);
const hours =Math.floor(totalsecondsleft/3600)%24;
const min =Math.floor(totalsecondsleft/60)%60;
const seconds =Math.floor(totalsecondsleft)%60;
console.log(days, hours, min, seconds);
daysEL.innerHTML=days;
hoursEL.innerHTML=hours;
minEL.innerHTML=min;
secondsEL.innerHTML=seconds;
}
function formattime(time) {
return time <10 ? '0${time}':time;
}
countDown();
formattime();
setInterval(countDown,1000);//It calls the countDown every seconds
