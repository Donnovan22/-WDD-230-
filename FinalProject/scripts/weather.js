const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-img");
const captionDesc = document.querySelector("#current-condition");
const humidity = document.querySelector("#current-humidity");


const cards = document.querySelector(".weather-forecast-content");
const div = document.querySelector(".weather-forecast")


const url = "https://api.openweathermap.org/data/2.5/onecall?lat=-16.39889&lon=-71.535&units=Imperial&appid=27873803a11e251d1684b0dd1d423d5f";


async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
      createThreeDayForecast(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

function  displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.current.temp.toFixed(0)}</strong>`;
  humidity.textContent = `${weatherData.current.humidity}`

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png`;
  const desc = weatherData.current.weather[0].description;

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = desc;
}

function createThreeDayForecast(weatherData) {
  let title = document.createElement("h2");
  title.textContent = "Weather Forecast";
  div.append(title);

  weatherData.daily.map((day, index) => {
    if(index < 3) {
      let card = document.createElement("div");
      
      let date = document.createElement("p");
      let icon = document.createElement("img");
      let min = document.createElement("p");
      let max = document.createElement("p");

      const iconsrc = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;
      const desc = day.weather[0].description;

      icon.setAttribute("src", iconsrc);
      icon.setAttribute("alt", desc);
      icon.setAttribute("loading", "lazy");

      let dt = new Date(day.dt * 1000); 

      
      date.innerHTML = `${dt.toDateString()}`;
      icon.innerHTML = `${day.weather[0].icon}`;
      min.innerHTML = `Min temp: ${day.temp.min}&deg;F`;
      max.innerHTML = `Max Temp: ${day.temp.max}&deg;F`;

      
      card.append(date);
      card.append(icon);
      card.append(max);
      card.append(min);

      cards.append(card);

    }
  }).join(" ");

  
}

apiFetch();