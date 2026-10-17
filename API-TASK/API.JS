// let input = document.getElementsByName("input")
// let btn = document.getElementById("searchBtn")
// let cityName = document.getElementById("weatherCard")
// const running = document.getElementById("loading");
// const error = document.getElementById("error");
// const historyList = document.getElementById("historyList");


// btn.addEventListener("click",function(event){
//     console.log(btn)
// })
const apiKey = "YOUR_API_KEY";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const loading = document.getElementById("loading");
const error = document.getElementById("error");

const weatherCard = document.getElementById("weatherCard");

const historyList = document.getElementById("historyList");

// Store searched cities
let searchHistory = [];

// Search button click
searchBtn.addEventListener("click", getWeather);

// Press Enter to search
cityInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        getWeather();
    }
});

async function getWeather() {

    const city = cityInput.value.trim();

    if (city === "") {
        error.textContent = "Please enter a city name.";
        return;
    }

    error.textContent = "";
    loading.textContent = "Loading weather...";

    weatherCard.innerHTML = "";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        loading.textContent = "";

        weatherCard.innerHTML = `
            <h2>${data.name}</h2>
            <p>🌡 Temperature: ${data.main.temp} °C</p>
            <p>☁ Condition: ${data.weather[0].description}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
        `;

        // Add city to history
        searchHistory.push(data.name);

        historyList.innerHTML = "";

        searchHistory.forEach(function(cityName){

            const li = document.createElement("li");

            li.textContent = cityName;

            historyList.appendChild(li);

        });

    }

    catch(err){

        loading.textContent = "";

        error.textContent = err.message;

    }

}
