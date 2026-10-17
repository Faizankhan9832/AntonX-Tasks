// let cityInput = document.getElementById("cityInput");
// let loading = document.getElementById("loading");
// let error = document.getElementById("error");
// let cityName = document.getElementById("cityName");
// let temp = document.getElementById("temp");
// let condition = document.getElementById("condition");
// let humidity = document.getElementById("humidity");
// let wind = document.getElementById("wind");
// let pressure = document.getElementById("pressure");
// let historyList = document.getElementById("historyList");
// let searchBtn = document.getElementById("searchBtn");

// searchBtn.addEventListener("click", () => {
//     let city = cityInput.value;
//     if ( city===""){
//         alert("Please enter a city name");
//         return;
//     }
//         loading.classList.remove("hidden");
//         loading.classList.add("visible");

//         console.log( city);
//     // Add your weather fetching logic here
// });
//   fetch(`https://api.open-meteo.com/v1/forecast?latitude=34.002047&longitude=71.511248&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&hourly=temperature_2m,precipitation,weathercode&current_weather=true`)
//     // .then((response) => response.json())
//     // .then((data) => { 
//     //     console.log(data);
        
//     //     fetch(url)
// .then(response => response.json())
// .then(data => {

//     // City Name (Open-Meteo doesn't provide it)
//     cityName.textContent = cityInput.value;

//     // Temperature
//     temp.textContent = data.current_weather.temperature + " °C";

//     // Wind Speed
//     wind.textContent = data.current_weather.windspeed + " km/h";

//     // Humidity (first hourly value)
//     humidity.textContent = data.hourly.relative_humidity_2m[0] + " %";

//     // Pressure (first hourly value)
//     pressure.textContent = data.hourly.surface_pressure[0] + " hPa";

//     // Weather Condition
//     condition.textContent = getWeatherCondition(data.current_weather.weathercode);

// })
// .catch(err => {
//     console.log(err);
// });
        //  document.getElementById("cityInput").textContent = data.cityInput;
        //  document.getElementById("cityName").textContent = data.cityName;
        //   document.getElementById("humidity").textContent = data.humidity;
        //   document.getElementById("windspeed").textContent = data.windspeed;
        //   document.getElementById("pressure").textContent = data.pressure;
        //   document.getElementById("condition").textContent = data.condition;
        //   document.getElementById("temp").textContent = data.temp;
        //  document.getElementById("completed").textContent =
        //      data.completed ? "✅ Completed" : "❌ Not Completed";
    //  })

// loading.classList.remove("hidden");
// loading.classList.add("visible");



// let weather = fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m");



// const sampleWeatherResponse = {
//   current: {
//     time: "2022-01-01T15:00",
//     temperature_2m: 2.4,
//     wind_speed_10m: 11.9
//   },
//   hourly: {
//     time: ["2022-07-01T00:00", "2022-07-01T01:00"],
//     wind_speed_10m: [3.16, 3.02, 3.3, 3.14, 3.2, 2.95],
//     temperature_2m: [13.7, 13.3, 12.8, 12.3, 11.8],
//     relative_humidity_2m: [82, 83, 86, 85, 88, 88, 84, 76]
//   }
// };

// weather
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   });







let latitude = document.getElementById("latitude");
let longitude = document.getElementById("longitude");
let loading = document.getElementById("loading");

let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {
    let lat = latitude.value;
    let lon = longitude.value;
    
})



let weather = fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=34.008&longitude=71.5785&current=temperature_2m`
);

weather
    .then(weather => weather.json())
    .then(data => {
        document.getElementById("lat").textContent = data.latitude;
        document.getElementById("lon").textContent = data.longitude;
        document.getElementById("temp").textContent = data.current.temperature_2m;
        document.getElementById("time").textContent = data.current.time;
        // document.getElementById("loading").textContent = "Weather data loaded successfully!";
    })
      .catch(error => {

        // document.getElementById("loading").textContent = "";

        alert("Error: " + error.message);

    });
        // console.log(data);
    