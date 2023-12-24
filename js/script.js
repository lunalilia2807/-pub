//constant
var todaysDate = new Date();
const ourAnniversary = new Date("2023-04-27")
const ourDayWeMet = new Date("2023-01-01")

//select DOM
outputInSeconds = document.querySelector('.seconds');
outputInMinutes = document.querySelector('.minutes');
outputInHours = document.querySelector('.hours');
outputInDays = document.querySelector('.days');
outputInMonths = document.querySelector('.months');
outputInYears = document.querySelector('.years');

arrowUp= document.querySelector('.up');
arrowDown= document.querySelector('.down');
header = document.getElementById('main-header');

textArray = document.querySelector('.output');

//event listeners
outputInSeconds.addEventListener('click', yearsInSeconds);
outputInMinutes.addEventListener('click', yearsInMinutes);
outputInHours.addEventListener('click', yearsInHours);
outputInDays.addEventListener('click', yearsInDays);
outputInMonths.addEventListener('click', yearsInMonths);
outputInYears.addEventListener('click', years);
arrowUp.addEventListener('click', changeText);
arrowDown.addEventListener('click', changeTextBack);

//functions
function yearsInSeconds(){
    if (header.innerText.includes("other")){
        days = everythingIntoDays_();
        daysIntoSeconds = days * 24 * 60 * 60;
        textArray.innerText = daysIntoSeconds + " ≅ " + Math.floor(daysIntoSeconds) + " seconds";
    }else{
        days = everythingIntoDays();
        daysIntoSeconds = days * 24 * 60 * 60;
        textArray.innerText = daysIntoSeconds + " ≅ " + Math.floor(daysIntoSeconds) + " seconds";
    }
};

function yearsInMinutes(){
    if (header.innerText.includes("other")){
        days = everythingIntoDays_();
        daysIntoMinutes = days * 24 * 60;
        textArray.innerText = daysIntoMinutes + " ≅ " + Math.floor(daysIntoMinutes) + " minutes";
    }else{
        days = everythingIntoDays();
        daysIntoMinutes = days * 24 * 60;
        textArray.innerText = daysIntoMinutes + " ≅ " + Math.floor(daysIntoMinutes) + " minutes";
    }
};

function yearsInHours(){
    if (header.innerText.includes("other")){
        days = everythingIntoDays_();
        daysIntoHours = days * 24;
        textArray.innerText = daysIntoHours + " ≅ " + Math.floor(daysIntoHours) + " hours";
    }else{
    days = everythingIntoDays();
    daysIntoHours = days * 24;
    textArray.innerText = daysIntoHours + " ≅ " + Math.floor(daysIntoHours) + " hours";
    }
};

function yearsInDays(){
    if (header.innerText.includes("other")){
        days = everythingIntoDays_();
        textArray.innerText = days + " ≅ " + Math.floor(days) + " days";
    }else{
    days = everythingIntoDays();
    textArray.innerText = days + " ≅ " + Math.floor(days) + " days";
    }
};


function yearsInMonths(){
    if (header.innerText.includes("other")){
        days = everythingIntoDays_();
        daysIntoMonths = (days / 365) * 12 ;
        textArray.innerText = daysIntoMonths + " ≅ " + Math.floor(daysIntoMonths) + " months";
    }else{
    days = everythingIntoDays();
    daysIntoMonths = (days / 365) * 12 ;
    textArray.innerText = daysIntoMonths + " ≅ " + Math.floor(daysIntoMonths) + " months";
    }
};

function years(){
    if (header.innerText.includes("other")){
        days = everythingIntoDays_();
        daysIntoYears = days / 365;
        textArray.innerText = daysIntoYears + " ≅ " + Math.floor(daysIntoYears) + " years";
    }else{
        days = everythingIntoDays();
        daysIntoYears = days / 365;
        textArray.innerText = daysIntoYears + " ≅ " + Math.floor(daysIntoYears) + " years";
    }
    
}

function everythingIntoDays(){
    exactAmountOfDays = (todaysDate.getTime() - ourAnniversary.getTime()) / (1000 * 3600 * 24)
    return exactAmountOfDays;
}

function everythingIntoDays_(){
    exactAmountOfDays = (todaysDate.getTime() - ourDayWeMet.getTime()) / (1000 * 3600 * 24)
    return exactAmountOfDays;
}

function changeText(){
    header.innerText = "How long do we know each other"
    arrowUp.style.display = "none";
    arrowDown.style.display = "flex";
}

function changeTextBack(){
    header.innerText = "How long have we been together"
    arrowUp.style.display = "flex";
    arrowDown.style.display = "none";
}

