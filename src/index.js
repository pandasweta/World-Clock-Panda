// alert("Hello");
function displayTime() {
    // City-1 date and time
    let newDelhiElement = document.querySelector("#new-delhi");
    let newDelhiTime = document.querySelector("#city-time");
    newDelhiTime.innerHTML = `${moment().tz("Asia/Kolkata").format("hh:mm:ss [<small>]A[<small>]")}`;
    setInterval(time, 1000); let newDelhiDate = document.querySelector("#city-date");
    newDelhiDate.innerHTML = `${moment().format("MMMM Do YYYY")}`;

    // City-2 date and time

    let rotterdamElement = document.querySelector("#rotterdam");
    let rotterdamTime = document.querySelector("#time");
    rotterdamTime.innerHTML = `${moment.tz("Europe/Amsterdam").format("hh:mm:ss [<small>]A[<small>]")}`;
    let rotterdamDate = document.querySelector("#date");
    rotterdamDate.innerHTML = `${moment().format("MMMM Do YYYY")}`;
}

displayTime();
setInterval(displayTime, 1000);

