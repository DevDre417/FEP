const api = {
  key: "90e9ff7508b850b27e1cab92541a14cc",
  base: "https://api.openweathermap.org/data/2.5/"
} 

const searchBx = document.querySelector(".searchBox");
searchBx.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchBx.value);
    console.log(searchBx.value);
  }
}

function getResults(query){
  fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`).then(weather => {
      return weather.json();
  }).then(displayResults);
}

function displayResults(weather){
  console.log(weather);
}