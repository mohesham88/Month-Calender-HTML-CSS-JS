let monthHeader = document.querySelector(".month .date h1")
let paraHeader = document.querySelector(".month .date p")
let date = new Date();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
monthHeader.innerHTML = `${weekday[date.getDay()]}`;

paraHeader.innerHTML = `${weekday[date.getDay()]} ${month[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`



const firstDayOfMonth = new Date(`${month[date.getMonth()]} 1, ${date.getFullYear()} 01:15:00`)



let numberOfDaysInMonth = new Date(date.getFullYear(),date.getMonth() + 1,0);
numberOfDaysInMonth = numberOfDaysInMonth.getDate();
console.log(firstDayOfMonth.getDay())



let allDays = document.querySelector(".days");

let dysCntr = 1;
for(let i = 0 ; i < numberOfDaysInMonth + firstDayOfMonth.getDay(); i++){
    let d = document.createElement("div");
    if(i < firstDayOfMonth.getDay()){
        d.innerHTML = ""
        d.classList.add("empty")
    }
    else{
        d.innerHTML = `${dysCntr}`;
        dysCntr++;
    }

    if(date.getDate() == dysCntr - 1){
        d.classList.add("today")
    }

    allDays.appendChild(d);

}


