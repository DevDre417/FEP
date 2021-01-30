  const ser = document.querySelector('#inp');
  let container = document.querySelector('#todoContainer');
  const addButton = document.querySelector('#addB');
  const clearButton = document.querySelector('#clearB');
  const cleerButton = document.querySelector('#cleerB');
  const savedState = localStorage.getItem('tasks');

  
const saveState = () => localStorage.setItem('tasks', container);

if (savedState){
  
}


  clearButton.style.color = "red";

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
  
  
  ser.value = '';
  }
  saveState();
}
addButton.onclick = addValue;
cleerButton.onclick = () => container.innerHTML = '';
///////////////////////////////////
saveState();
