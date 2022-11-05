const curDate =document.getElementById('date');
const weather = document.getElementById('weather');
const tempStatus = "clouds";
let temperature=document.getElementById('temp');;

let min_temperature=document.getElementById('min');;
let max_temperature=document.getElementById('max');

const getCurrent  = ()=>{
    let currentTime =new Date()
let day = currentTime.getDay();
let date = currentTime.getDate();
let month = currentTime.getMonth();
let hours = currentTime.getHours();
let min = currentTime.getMinutes();

let sec = currentTime.getSeconds();

let per=' AM ';
console.log(hours);
if(hours>12){
per = ' PM ';
hours=hours-12;
}
if(hours==12 && min==0 && sec==0 ){
per='noon';
hours=hours-12;

}

console.log(hours);
let year = currentTime.getFullYear();
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
day= (weekday[day]);
month= (months[month]);
curDate.innerHTML=` ${day}| ${date}|${month}|${year} |   ${hours}: ${min} : ${sec} ${per}`;
}
getCurrent();