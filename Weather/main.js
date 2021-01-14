const api = {
  key: "90e9ff7508b850b27e1cab92541a14cc",
  base: "https://api.openweathermap.org/data/2.5/"
} 

const searchBx = document.querySelector(".searchBox");
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
  console.log(weather);
  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now = new Date();
  let date = document.querySelector('.location .date');
  date.innerText =  dateBuilder(now);

  let temp = document.querySelector('.current .temp');
  temp.innerText = `${Math.round(weather.main.temp)}<span>°C</span>`;
}


function dateBuilder(d) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Sun","Mon","Tues","Wed","thurs","Fri","Sat"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
