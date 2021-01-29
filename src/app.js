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



//

function myPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  let apiKey = "faeef537be5414427a6c70a51cd4c87e";
  let apiUrl = "https://api.openweathermap.org/data/2.5/weather?";

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
    let wind = Math.round((response.data.wind.speed)*3.6)
     let windElement = document.querySelector("#wind");
    windElement.innerHTML = `wind: ${wind}km/h`;
    //
     let text = response.data.weather[0].description
     let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML = text;
    //
    //let rain = Math.round(response.data.precipitation.value);
     //let rainElement = document.querySelector("#rain");
    //rainElement.innerHTML = `Precipitation:${rain}mm`;
    //
     let dateElement = document.querySelector("#date");
    dateElement.innerHTML = formatDate(response.data.dt * 1000);
    //
    let iconElement = document.querySelector("#icon");
    let iconCode = response.data.weather[0].icon;
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${iconCode}@2x.png`);
}

  axios
    .get(`${apiUrl}lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
    .then(displayTemperature);


    function search(city){
    let apiKey = "faeef537be5414427a6c70a51cd4c87e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
}

function submitCity(event){
    event.preventDefault()
    let cityInputElement = document.querySelector("#cityInput")
    search(cityInputElement.value);
}

let form = document.querySelector("#searchForm")
form.addEventListener("submit", submitCity)    




}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(myPosition);
}

let current = document.querySelector("#currentLocation");
current.addEventListener("click", getCurrentPosition);

//


getCurrentPosition();

