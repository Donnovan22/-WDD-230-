const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-img");
const captionDesc = document.querySelector("#current-condition");
const windspeed = document.querySelector("#windspeed")
const windchill = document.querySelector("#windchill")



const url = "https://api.openweathermap.org/data/2.5/weather?q=Arequipa&units=Imperial&appid=27873803a11e251d1684b0dd1d423d5f";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
      calculateWindChillFactor(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

function  displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;
 

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;

  windspeed.textContent = weatherData.wind.speed
}

const calculateWindChillFactor = (data) => {
  let temperature = data.main.temp.toFixed(0);
  let windSpeed = data.wind.speed;

  if (temperature <= 50 && windSpeed > 3){
    let result =  35.74 + 0.6215 * temperature -35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    let rounded = Math.round(result);
    windchill.innerHTML = `${rounded} &deg;F`;
  } else {
    windchill.textContent = `N/A`;
  };
}; 

apiFetch();