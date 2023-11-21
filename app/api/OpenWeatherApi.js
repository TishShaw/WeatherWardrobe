 /**
 * WeatherAPI.js
 * Handles communication with the OpenWeather API.
 * This service is responsible for fetching weather data based on the provided location.
 * It processes the API responses and returns weather information, including high and low temperatures
 * and precipitation details.
 */

  class WeatherAPI {
    // Constructor of the class, initializes the API key
    constructor() {
        // Storing the OpenWeather API key. 
        // This key should be replaced by the actual key at build time or fetched securely.
        this.apiKey = process.env.WEATHER_API_KEY;
    }

    // Function to get current weather data using OpenWeather API
    getCurrentWeather(latitude, longitude) {
        // Constructing the URL for the API request with latitude, longitude, and API key
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}&units=imperial`;

        // Making a network request to the URL
        return fetch(url)
            .then(response => response.json()) // Parsing the response as JSON
            .then(data => {
                // Extracting and returning the relevant weather data
                const highTemp = data.main.temp_max;
                const lowTemp = data.main.temp_min;
                const precipitation = data.weather.some(w => w.main === 'Rain' || w.main === 'Snow');

                return { highTemp, lowTemp, precipitation };
            })
            .catch(error => {
                // Handling any errors from the fetch operation
                console.error('Error fetching weather data:', error);
            });
    }

    // Additional helper methods or error handling functions can be added here
    //TODO: Nice to haves- More robust error handling, 
    /*
    - [ ] handleError(error)
    - [ ] formatWeatherData(data)
    - [ ] getWeatherByCity(cityName)
    - [ ] getWeatherByZip(zipCode, countryCode)
    - [ ] fetchWeather(url)
    - [ ] cacheWeatherData(key, data)
    - [ ] getCachedWeatherData(key)
    - [ ] generateUserFriendlyMessage(weatherData)
    */
}

// Exporting the WeatherAPI class for use in other parts of your application
export default WeatherAPI;

/*
Key Changes and Notes:
API Endpoint Update: Changed the API URL to point to OpenWeather's current weather data endpoint. Make sure you have the correct endpoint as per OpenWeather's documentation.

Units Parameter: Added &units=imperial to get the temperature in Fahrenheit. If you need Celsius, change it to &units=metric.

Weather Data Extraction: Extracting the high and low temperatures from the response, and checking for precipitation types (Rain or Snow). The precipitation value is a boolean indicating whether there is any rain or snow.

Error Handling: Error handling is kept for network request failures.

Environment Variable: The API key variable name has been updated to WEATHER_API_KEY to reflect its purpose.


*/