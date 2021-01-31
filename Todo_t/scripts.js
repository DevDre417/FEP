  const ser = document.querySelector('#inp');
  const container = document.querySelector('#todoContainer');
  const addButton = document.querySelector('#addB');
  const clearButton = document.querySelector('#clearB');
  const cleerButton = document.querySelector('#cleerB');
  clearButton.style.color = "red";

//Local SaveState
const savedState = localStorage.getItem('ad');
const saverino = () => localStorage.setItem('ad', container.innerHTML);
const deldrino = localStorage.getItem('add');
const delrino = () => localStorage.setItem('add', container.innerHTML);


(savedState) ? container.innerHTML = savedState: 1+1;
// (deldrino) ? container.innerHTML = deldrino : 1+1;
// /////////////



///Input Listener
  ser.addEventListener("keypress", enter => { if (enter.keyCode == 13) addValue()});
  

  const delbb = () => {
    container.innerHTML = '';
    localStorage.setItem('delll', container.innerHTML)
    const saveddel = localStorage.getItem('delll');
  }

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
  cleerButton.onclick = delbb;
  }
  ser.value = '';
  saverino();
}

addButton.onclick = addValue;




///////////////////////////////////

