const api = {
  key: "90e9ff7508b850b27e1cab92541a14cc",
  base: "https://api.openweathermap.org/data/2.5/"
} 

const searchBx = document.querySelector('.search-box');
searchBx.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchBx.value);
  }
}

function getResults(query){
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`).then(weather => {
      return weather.json();
  }).then(displayResults);
}

function displayResults(weather){
  console.log(weather)
  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector('.location .date');
  date.innerText =  dateBuilder(now);

  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

  let weather_el = document.querySelector('.weather');
  weather_el.innerText = weather.weather[0].description;

  let hi_low = document.querySelector('.hi-low');
  hi_low.innerText = `${weather.main.temp_min}°C / ${weather.main.temp_max}°C`;
}




function dateBuilder(d) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
