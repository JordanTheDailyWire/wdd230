// Script for Weather and Wind Chill //

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=4574324&appid=45cd453256e0f3f4eda5de4059a5fed2';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsonObject) => {
        console.log(jsonObject);

        const iconURL = `https://openweathermap.org/img/w/${jsonObject.weather[0].icon}.png`;

        let temp = jsonObject.main.temp;
        let speed = jsonObject.wind.speed;

        document.querySelector('.city-weather').textContent = jsonObject.name;
        document.querySelector('figcaption').textContent = jsonObject.weather[0].description;
        document.querySelector('#weatherLogo').setAttribute('src', iconURL);
        document.querySelector('#weatherLogo').setAttribute('alt', jsonObject.weather[0].description);
        document.getElementById('temperature').innerHTML = `Temperature: ${temp} &deg;F`;
        document.getElementById('wind-speed').textContent = `Wind Speed: ${speed} mph`;
        document.getElementById('humidity').textContent = `Humidity: ${jsonObject.main.humidity}`;

        let windChill = computeWindChill(temp, speed);

        document.getElementById('wind-chill').textContent = `Wind Chill: ${windChill}`;

        
    });

    function computeWindChill(t, s) {
        windchill = Math.round((35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16) * 100 / 100);

        if (t <= 50 && s > 3) {
            return windchill
        } else {
            return `N/A`
        }
    }