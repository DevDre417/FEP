const api = {
  key: "90e9ff7508b850b27e1cab92541a14cc",
  baseurl: "https://api.openweathermap.org/data/2.5"
}

const searchBx = document.querySelector(".searchBox");
searchBx.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    // getResults(searchBox.value);
    console.log(searchBx.value);
  }
}