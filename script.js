const apiKey = 'YOUR_API_KEY';  // Replace with your actual API key
const city = 'Vienna';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

async function getWeather() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

function displayWeather(data) {
    const description = data.weather[0].description;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;

    document.getElementById('description').innerText = `Conditions: ${description}`;
    document.getElementById('temperature').innerText = `Temperature: ${temperature}°C`;
    document.getElementById('humidity').innerText = `Humidity: ${humidity}%`;
    document.getElementById('wind').innerText = `Wind Speed: ${windSpeed} m/s`;
}

getWeather();
