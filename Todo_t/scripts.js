  const ser = document.querySelector('#inp');
  const container = document.querySelector('#todoContainer');
  const addButton = document.querySelector('#addB');
  const clearButton = document.querySelector('#clearB');
  const cleerButton = document.querySelector('#cleerB');
  clearButton.style.color = "red";

//Local SaveState
const savedState = localStorage.getItem('ad');
const saverino = () => localStorage.setItem('ad', container.innerHTML);
(savedState) ? container.innerHTML = savedState: null;
///

//Input Listener
  ser.addEventListener("keypress", enter => {  (enter.keyCode == 13) ? addValue(): null});
///


//Add List Item
const addValue = () => {
  if (/\S/.test(ser.value)) {
  const cont = document.createElement('div');
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'x';
  deleteButton.style = "margin-left: 5px; margin:top: 5px;font-size: 18px; position: relative; bottom: 6px; padding: 3px; color: red;";
  ///

  //Delete item
  deleteButton.onclick = () => {
    cont.innerHTML = '';
    localStorage.getItem('item')
  saverino();
    localStorage.removeItem('item');
  }
  ///
  cont.innerText = ser.value;
  cont.appendChild(deleteButton);
  container.appendChild(cont);
  const itemerino = () => localStorage.setItem('item', cont.innerText)
  saverino();
}
//Clear List
  cleerButton.onclick = () => {
    container.innerHTML = '';
    localStorage.removeItem('ad')
  }
  }
  ser.value = '';
///
addButton.onclick = addValue;




///////////////////////////////////

