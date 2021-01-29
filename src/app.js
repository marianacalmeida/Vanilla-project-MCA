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


 function night(){
    let bgElement = document.querySelector("#background");
    bgElement.classList.add("night");
    };

    if (hours > 18 ) {
   night()};

    
return `${day}, ${hours}:${minutes}`;

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
    celsius = response.data.main.temp
//
    let city = response.data.name;
     let cityElement = document.querySelector("#city");
    cityElement.innerHTML = city;
    //
    minTemp = Math.round(response.data.main.temp_min);
    maxTemp = Math.round(response.data.main.temp_max);
     let minElement = document.querySelector("#min");
    minElement.innerHTML = `${minTemp}º`;
    let maxElement = document.querySelector("#max");
    maxElement.innerHTML = `${maxTemp}º`;
   
    //
    let wind = Math.round((response.data.wind.speed)*3.6);
     let windElement = document.querySelector("#wind");
    windElement.innerHTML = `wind: ${wind}km/h`;
    //
     let text = response.data.weather[0].description;
     let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML = text;
    //
    let humidity = Math.round(response.data.main.humidity);
     let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = `humidity: ${humidity}%`;
    //
     let dateElement = document.querySelector("#date");
    dateElement.innerHTML = formatDate(response.data.dt * 1000);
    //
    let iconElement = document.querySelector("#icon");
    let iconCode = response.data.weather[0].icon;
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${iconCode}@2x.png`);

     //


    function cloudyDay(){
    let bgElement = document.querySelector("#background");
    bgElement.classList.add("cloudy-day");
    };


    if (humidity > 60 ) {
   cloudyDay()};

};

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

function showFahrenheit(event){
event.preventDefault();
let tempElement = document.querySelector("#currentTemp");
let FahrTemp = Math.round((celsius * 9) / 5 + 32);
let minElement = document.querySelector("#min");
let minFahr = Math.round((minTemp * 9) / 5 + 32);
let maxElement = document.querySelector("#max");
let maxFahr = Math.round((maxTemp * 9) / 5 + 32);
tempElement.innerHTML = `${FahrTemp}º`;
minElement.innerHTML = `${minFahr}º`;
maxElement.innerHTML = `${maxFahr}º`;

celElement.classList.remove("active");
fahElement.classList.add("active");
}

function showCelsius(event){
event.preventDefault();
let tempElement = document.querySelector("#currentTemp");
tempElement.innerHTML = `${Math.round(celsius)}º`;
let minElement = document.querySelector("#min");
minElement.innerHTML = `${Math.round(minTemp)}º`;
let maxElement = document.querySelector("#max");
maxElement.innerHTML = `${Math.round(maxTemp)}º`;

celElement.classList.add("active");
fahElement.classList.remove("active");
}

let celsius = null;
let minTemp = null;
let maxTemp = null;

let form = document.querySelector("#searchForm")
form.addEventListener("submit", submitCity)    

let fahElement = document.querySelector("#fah");
let celElement = document.querySelector("#cel");
fahElement.addEventListener("click", showFahrenheit);
celElement.addEventListener("click", showCelsius);







}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(myPosition);
}

let current = document.querySelector("#currentLocation");
current.addEventListener("click", getCurrentPosition);

//


getCurrentPosition();


