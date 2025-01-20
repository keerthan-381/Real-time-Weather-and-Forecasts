async function getWeatherAndAQIData() {
    const apiKey = "a4fa56b3ae034b35b2683434251601";
    const location = document.getElementById('cityInput').value;

    if (!location) {
        showError("Please enter a city name.");
        return;
    }

    const weatherUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=1&aqi=no&alerts=no`;

    try {
        const weatherResponse = await fetch(weatherUrl);
        if (weatherResponse.ok) {
            const weatherData = await weatherResponse.json();
            updateWeatherInfo(weatherData);
            fetchAQI(location); // Fetch AQI after getting weather data
        } else {
            showError("City not found. Please try again.");
        }
    } catch (error) {
        showError("An error occurred. Please try again.");
    }
}

function updateWeatherInfo(data) {
    const locationInfo = data.location;
    const currentWeather = data.current;
    const forecast = data.forecast.forecastday[0];
    const hourlyData = forecast.hour;

    document.getElementById('location').innerText = `${locationInfo.name}, ${locationInfo.region}, ${locationInfo.country}`;
    document.getElementById('time').innerText = `Time: ${locationInfo.localtime}`;
    document.getElementById('temperature').innerText = `Temperature: ${currentWeather.temp_c}°C (${currentWeather.temp_f}°F)`;
    document.getElementById('condition').innerText = `Condition: ${currentWeather.condition.text}`;
    document.getElementById('wind').innerText = `Wind: ${currentWeather.wind_kph} kph (${currentWeather.wind_mph} mph)`;
    document.getElementById('windGust').innerText = `Wind Gust: ${currentWeather.gust_kph} kph (${currentWeather.gust_mph} mph)`;
    document.getElementById('pressure').innerText = `Pressure: ${currentWeather.pressure_mb} mb`;
    document.getElementById('precipitation').innerText = `Precipitation: ${currentWeather.precip_mm} mm`;
    document.getElementById('humidity').innerText = `Humidity: ${currentWeather.humidity}%`;
    document.getElementById('cloud').innerText = `Cloud: ${currentWeather.cloud}%`;
    document.getElementById('visibility').innerText = `Visibility: ${currentWeather.vis_km} km`;
    document.getElementById('uv').innerText = `UV Index: ${currentWeather.uv}`;
    document.getElementById('feelsLike').innerText = `Feels Like: ${currentWeather.feelslike_c}°C`;
    document.getElementById('windChill').innerText = `Wind Chill: ${currentWeather.windchill_c}°C`;
    document.getElementById('heatIndex').innerText = `Heat Index: ${currentWeather.heatindex_c}°C`;
    document.getElementById('dewpoint').innerText = `Dewpoint: ${currentWeather.dewpoint_c}°C`;

    document.getElementById('sunrise').innerText = `Sunrise: ${forecast.astro.sunrise}`;
    document.getElementById('sunset').innerText = `Sunset: ${forecast.astro.sunset}`;
    document.getElementById('moonrise').innerText = `Moonrise: ${forecast.astro.moonrise}`;
    document.getElementById('moonset').innerText = `Moonset: ${forecast.astro.moonset}`;
    document.getElementById('moonPhase').innerText = `Moon Phase: ${forecast.astro.moon_phase}`;

    let hourlyHTML = "";
    hourlyData.forEach(hour => {
        hourlyHTML += `
            <div class="hourly-box">
                <div class="hourly-left">
                    <p class="hour">${hour.time.split(" ")[1]}</p>
                    <p>Temp: ${hour.temp_c}°C</p>
                    <p>Humidity: ${hour.humidity}%</p>
                </div>
                <div class="hourly-right">
                    <p>Condition: ${hour.condition.text}</p>
                    <p>Wind: ${hour.wind_kph} kph</p>
                </div>
            </div>
        `;
    });

    document.getElementById('hourly').innerHTML = hourlyHTML;
    document.getElementById('weather-container').style.display = 'grid';
}
