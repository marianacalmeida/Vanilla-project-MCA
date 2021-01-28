
function displayTemperature(response) {
    let mainTemp = Math.round(response.data.main.temp);
    let tempElement = document.querySelector("#currentTemp");
    tempElement.innerHTML = `${mainTemp}º`;
    let city = response.data.name;
     let cityElement = document.querySelector("#city");
    cityElement.innerHTML = city;
    let minTemp = Math.round(response.data.main.temp_min)
    let maxTemp = Math.round(response.data.main.temp_max)
     let minElement = document.querySelector("#min");
    minElement.innerHTML = `${minTemp}º`;
    let maxElement = document.querySelector("#max");
    maxElement.innerHTML = `${maxTemp}º`;
    
}

let apiKey = "faeef537be5414427a6c70a51cd4c87e";

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Porto&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);