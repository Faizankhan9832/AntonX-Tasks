// const params = {
//   latitude: 34.008,
//   longitude: 71.5785,
//   daily: [
//     "weather_code",
//     "temperature_2m_max",
//     "sunrise",
//     "rain_sum",
//   ],
//   hourly: [
//     "temperature_2m",
//     "rain",
//     "showers",
//     "pressure_msl",
//     "cloud_cover",
//     "wind_speed_120m",
//     "wind_direction_10m",
//     "soil_temperature_18cm",
//     "soil_moisture_3_to_9cm",
//     "temperature_120m",
//     "wind_direction_180m",
//     "wind_direction_120m",
//   ],
// };

// // const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${params.latitude}&longitude=${params.longitude}&daily=${params.daily.join(",")}&hourly=${params.hourly.join(",")}`;

// console.log(apiUrl);
// // 34.002047, 71.511248


// const res = fetch(apiUrl,{
//     method : "patch"
// });

// res
//   .then((data) => {
//     console.log(data);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((data) => {
//     console.log(data);
//   });


// let todo =`https://jsonplaceholder.typicode.com/todos/1`
// let res = fetch(todo)
// res.then((data)=>{
// return data.json()
// })


fetch('https://jsonplaceholder.typicode.com/todos/1',
    {
        method : "GET",
        ball : "cricket"
    }
)
  .then(response => response.json())
  .then(data => {

    document.getElementById("userId").textContent = data.userId;
    document.getElementById("id").textContent = data.id;
    document.getElementById("title").textContent = data.title;
    document.getElementById("completed").textContent =
      data.completed ? "✅ Completed" : "❌ Not Completed";

  })
  .catch(error => {
    console.log(error);
    document.querySelector(".card").innerHTML =
      "<h3>Failed to load data!</h3>";
  });