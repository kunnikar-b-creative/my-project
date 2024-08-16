function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector('#search-input');

  let cityElement = document.querySelector('#current-city');

  cityElement.innerHTML = searchInputElement.value;
  searchCity(searchInputElement.value);
}

function searchCity(city) {
  let apiKey = '6654fa001cd5343d304f9bt068o34b25';
  let units = 'metric';
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(displayTemperature);
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector('#temperature');
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);

  let humidityElement = document.querySelector('#humidity');
  humidityElement.innerHTML = response.data.temperature.humidity;

  let windSpeedElement = document.querySelector('#wind-speed');
  windSpeedElement.innerHTML = response.data.wind.speed;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector('#search-form');
searchForm.addEventListener('submit', search);

let currentDateELement = document.querySelector('#current-date');
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
