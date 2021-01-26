
const render = () => {
  const ser = document.getElementById('inp');
  
  const container = document.getElementById('todoContainer');


  const addButton = document.getElementById('addB');
  addButton.onclick = () => {
const newd = document.createElement('div');
container.appendChild(newd);
newd.innerText = ser.value;
  }
}


render();


