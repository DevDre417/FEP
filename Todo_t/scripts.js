  const ser = document.querySelector('#inp');
  let container = document.querySelector('#todoContainer');
  const addButton = document.querySelector('#addB');
  const clearButton = document.querySelector('#clearB');
  const cleerButton = document.querySelector('#cleerB');
  clearButton.style.color = "red";

//Local SaveState
const savedState = localStorage.getItem('list');
const saverino =() => localStorage.setItem('list', container.innerHTML);

  if(savedState) {
    container.innerHTML = savedState;
  }

/////////////

///Input Listener
  ser.addEventListener("keypress", enter => { if (enter.keyCode == 13) addValue()});
  

//Add List Item
const addValue = () => {
  if (/\S/.test(ser.value)) {
  const cont = document.createElement('div');
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'x';
  deleteButton.style = "margin-left: 5px; margin:top: 5px;font-size: 18px; position: relative; bottom: 6px; padding: 3px; color: red;";
  deleteButton.onclick = () => cont.innerHTML = '';
  cont.innerText = ser.value;
  cont.appendChild(deleteButton);
  container.appendChild(cont);
    
  }
  saverino();

  ser.value = '';
}
addButton.onclick = addValue;
cleerButton.onclick = () => {
  container.innerHTML = '';
  
}
saverino();
///////////////////////////////////

