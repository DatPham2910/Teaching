const API_KEY = '4269652c5e1b6a66a34f9d3d16ecc098';
const DEFAULT_VALUE = '--';
const searchInput = document.getElementById("search-input");
const cityName = document.querySelector(".city-name");
const weatherState = document.querySelector(".weather-state");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");

searchInput.addEventListener("change", (event) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${API_KEY}&lang=vi&units=metric`)
        .then(response => response.json())
        .then((data) => {
            cityName.innerHTML = data.name || DEFAULT_VALUE;
            weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE;
            weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` || DEFAULT_VALUE;
            temperature.innerHTML = `${Math.round(data.main.temp)}` || DEFAULT_VALUE;
   
            // Format sunrise and sunset times
            const sunriseDate = new Date(data.sys.sunrise * 1000);
            const sunsetDate = new Date(data.sys.sunset * 1000);
            sunrise.innerHTML = sunriseDate.toLocaleTimeString('vi-VN') || DEFAULT_VALUE;
            sunset.innerHTML = sunsetDate.toLocaleTimeString('vi-VN') || DEFAULT_VALUE;

            humidity.innerHTML = `${data.main.humidity}` || DEFAULT_VALUE;
            windSpeed.innerHTML = `${data.wind.speed}m/s` || DEFAULT_VALUE;
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            cityName.innerHTML = DEFAULT_VALUE;
            weatherState.innerHTML = DEFAULT_VALUE;
            weatherIcon.src = '';
            temperature.innerHTML = DEFAULT_VALUE;
            sunrise.innerHTML = DEFAULT_VALUE;
            sunset.innerHTML = DEFAULT_VALUE;
            humidity.innerHTML = DEFAULT_VALUE;
            windSpeed.innerHTML = DEFAULT_VALUE;
        });
});

// data.weather[0].description  ->>>
// {
//     "coord": {
//       "lon": 10.99,
//       "lat": 44.34
//     },
//     "weather": [
//       {
//         "id": 501,
//         "main": "Rain",
//         "description": "moderate rain",
//         "icon": "10d"
//       },
//         "id": 501,                       ?
//         "main": "Rain",                  ?
//         "description": "moderate rain",  ?       
//         "icon": "10d"                    ?
//       },
//         "id": 501,                       ?
//         "main": "Rain",                  ?
//         "description": "moderate rain",  ?       
//         "icon": "10d"                    ?
//       },
//         "id": 501,                       ?
//         "main": "Rain",                  ?
//         "description": "moderate rain",  ?       
//         "icon": "10d"                    ?
//       },
//     ],
//     "base": "stations",
//     "main": {                     data.main[4,1].presure  ->>>> 1015
//       "temp": 298.48,             data.main.presure
//       "feels_like": 298.74,
//       "temp_min": 297.56,
//       "temp_max": 300.05,
//       "pressure": 1015,
//       "humidity": 64,
//       "sea_level": 1015,
//       "grnd_level": 933
//     },
//     "visibility": 10000,
//     "wind": {
//       "speed": 0.62,
//       "deg": 349,
//       "gust": 1.18
//     },
//     "rain": {
//       "1h": 3.16
//     },
//     "clouds": {
//       "all": 100
//     },
//     "dt": 1661870592,
//     "sys": {
//       "type": 2,
//       "id": 2075663,
//       "country": "IT",
//       "sunrise": 1661834187
//       "sunset": 1661882248
//     },
//     "timezone": 7200,
//     "id": 3163858,
//     "name": "Zocca",
//     "cod": 200
//   }                        
             