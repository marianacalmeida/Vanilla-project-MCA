function formatDate(timestamp){
    let date = new Date(timestamp);

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
    let day = days[date.getDay()];
    let hours = date.getHours();
    if (hours < 10){
        hours = `0${hours}`
    };
    let minutes = date.getMinutes();
    if (minutes < 10){
        minutes = `0${minutes}`;
    };
    
return `${day}, ${hours}:${minutes}`
}


function displayTemperature(response) {
    let mainTemp = Math.round(response.data.main.temp);
    let tempElement = document.querySelector("#currentTemp");
    tempElement.innerHTML = `${mainTemp}º`;
//
    let city = response.data.name;
     let cityElement = document.querySelector("#city");
    cityElement.innerHTML = city;
    //
    let minTemp = Math.round(response.data.main.temp_min)
    let maxTemp = Math.round(response.data.main.temp_max)
     let minElement = document.querySelector("#min");
    minElement.innerHTML = `${minTemp}º`;
    let maxElement = document.querySelector("#max");
    maxElement.innerHTML = `${maxTemp}º`;
    //
     let dateElement = document.querySelector("#date");
    dateElement.innerHTML = formatDate(response.data.dt * 1000);
    //
    let iconElement = document.querySelector("#icon");
    let iconCode = response.data.weather[0].icon;
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${iconCode}@2x.png`);
}

let apiKey = "faeef537be5414427a6c70a51cd4c87e";
let city = "Porto"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
