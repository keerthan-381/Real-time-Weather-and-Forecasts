# Real Time Weather and Forecasts

A weather application that provides real-time weather information, hourly forecasts, and astronomical data for any city around the world. The app fetches data from the [WeatherAPI](https://www.weatherapi.com/) to display details such as temperature, wind speed, humidity, sunrise/sunset times, and more.

## Features

- **Current Weather**: Displays temperature, wind speed, humidity, cloud cover, pressure, UV index, and more.
- **Hourly Forecast**: Shows weather details (temperature, humidity, wind speed, and conditions) for the next 24 hours.
- **Astronomical Data**: Provides information on sunrise, sunset, moonrise, moonset, and the current moon phase.
- **City Search**: Enter any city name to get weather information for that location.
- **Error Handling**: Displays error messages if no city is entered or if the city is not found.


## Technologies Used

- **HTML5** for structuring the page.
- **CSS3** for styling the page and making it responsive.
- **JavaScript (ES6)** for fetching data from the WeatherAPI and updating the DOM.
- **WeatherAPI** for real-time weather data.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/keerthan-381/Real-time-Weather-and-Forecasts.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Real-time-Weather-and-Forecasts
   ```

3. Open `index.html` in your browser to start using the app.

## API Key

To use the WeatherAPI, you'll need to sign up for an API key. Follow these steps:

1. Visit [WeatherAPI](https://www.weatherapi.com/).
2. Create an account and generate an API key.
3. Replace the API key in `weather.js`:

   ```javascript
   const apiKey = "your-api-key-here";
   ```

> **Important:** For production projects, do not store your API key directly in the front-end code. Consider using a back-end server to handle API requests securely.

## Acknowledgements

- [WeatherAPI](https://www.weatherapi.com/) for providing the weather data.
- Special thanks to everyone who contributed to open-source weather APIs!
