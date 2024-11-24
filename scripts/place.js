// place.js

// Function to populate weather placeholders
function populateWeatherData() {
    // Placeholder data for Kosovo's weather (realistic example)
    const weatherData = {
        temperature: "12°C", // Average autumn temperature
        conditions: "Partly Cloudy",
        wind: "15 km/h", // Wind speed and direction
        windChill: "10°C" // Calculated wind chill
    };

    // Populate the temperature
    const temperatureElement = document.getElementById("temperature");
    if (temperatureElement) {
        temperatureElement.textContent = weatherData.temperature;
    }

    // Populate the conditions
    const conditionsElement = document.getElementById("conditions");
    if (conditionsElement) {
        conditionsElement.textContent = weatherData.conditions;
    }

    // Populate the wind
    const windElement = document.getElementById("wind");
    if (windElement) {
        windElement.textContent = weatherData.wind;
    }

    // Populate the wind chill
    const windChillElement = document.getElementById("windChill");
    if (windChillElement) {
        windChillElement.textContent = weatherData.windChill;
    }
}

// Call the function after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", populateWeatherData);