// alert("Hello");
function displayTime() {
    // City-1 date and time
    let newDelhiElement = document.querySelector("#new-delhi");
    if (newDelhiElement) {
        let newDelhiTime = document.querySelector("#city-time");
        // let time = moment().tz("Asia/Kolkata").format("hh:mm:ss [<small>]A[<small>]");
        newDelhiTime.innerHTML = `${moment().tz("Asia/Kolkata").format("hh:mm:ss [<small>]A[<small>]")}`;
        let newDelhiDate = document.querySelector("#city-date");
        newDelhiDate.innerHTML = `${moment().format("MMMM Do YYYY")}`;
    }

    // City-2 date and time

    let rotterDamElement = document.querySelector("#rotterdam");
    if (rotterDamElement) {
        let rotterdamTime = document.querySelector("#time");
        rotterdamTime.innerHTML = `${moment.tz("Europe/Amsterdam").format("hh:mm:ss [<small>]A[<small>]")}`;
        let rotterdamDate = document.querySelector("#date");
        rotterdamDate.innerHTML = `${moment().format("MMMM Do YYYY")}`;
    }
}

displayTime();
setInterval(displayTime, 1000);


// update date and time for the cities from list

function showCitiesTimeDate(event) {

    let timeZone = event.target.value;
    if (timeZone === "current-location") {
        timeZone = moment.tz.guess();
    }
    let cityTimeZone = moment().tz(timeZone);

    let cityName = timeZone.replace("_", " ").split("/")[1];
    // let cityTime = moment().tz(TimeZone).format("hh:mm:ss [<small>]A[<small>]");
    let cityDate = moment().tz(timeZone).format("MMMM Do YYYY");

    let cityNameElement = document.querySelector("#cities");
    cityNameElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityDate}</div>
          </div>
          <div class="time">${cityTimeZone.format("hh:mm:ss A")}</div>
    </div>
    <a href = "index.html">All Cities</a>`;



}




let cityName = document.querySelector("#select-cities");
cityName.addEventListener("change", showCitiesTimeDate);

