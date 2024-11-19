import "./style.css";

async function fetchWeather() {
  const location = document.getElementById("location").value.trim();
  if (!location) {
    alert("Please enter a location!");
    return;
  }

  const loader = document.getElementById("loader");
  loader.style.display = "block";

  const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=XVAXY2LJBEMKGP79PD92B9B26&include=current&unitGroup=metric&lang=en&tz=Asia/Kolkata`;

  try {
    const response = await axios.get(apiUrl);
    displayWeather(response.data);
  } catch (error) {
    console.error(error);
    alert("Weather data could not be fetched. Please try again later.");
  } finally {
    loader.style.display = "none";
  }
}

function displayWeather(data) {
  const weatherContainer = document.getElementById("weather-container");
  if (weatherContainer) {
    weatherContainer.remove();
  }

  const newWeatherContainer = document.createElement("div");
  newWeatherContainer.id = "weather-container";
  document.body.appendChild(newWeatherContainer);
  console.log(data);

  const locationName = data.address;
  const condition = data.currentConditions.conditions;
  const feelsLike = data.currentConditions.feelslike;
  const address = data.resolvedAddress;
  const humidity = data.currentConditions.humidity;

  newWeatherContainer.innerHTML = `
        <h4>Weather in ${locationName}</h4>
        <h5>Condition: ${condition}</h5>
        <h5>Humidity: ${humidity}%</h5>
        <h5>Feels like: ${feelsLike}°C</h5>
        <h5>Location: ${address}</h5>
    `;
}

window.fetchWeather = fetchWeather;
