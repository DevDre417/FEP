  const ser = document.querySelector('#inp');
  const container = document.querySelector('#todoContainer');
  const addButton = document.querySelector('#addB');
  const clearButton = document.querySelector('#clearB');
  
  clearButton.style.color = "red";
  //Add List Item

  ser.addEventListener("keypress", enter => { if (enter.keyCode == 13) addValue()});
  

const addValue = () => {
  if (/\S/.test(ser.value)) {
  const cont = document.createElement('div');
  const deleteButton = document.createElement('button')
  let id = new Date().getTime();
  cont.id = id;
  deleteButton.innerText = 'Delete';
  deleteButton.style = "margin-left: 5px; margin:top: 5px;font-size: 18px; position: relative; bottom: 6px; padding: 3px;"
  cont.innerText = ser.value;
  cont.appendChild(deleteButton);
  container.appendChild(cont);

  ser.value = '';
  }
}
addButton.onclick = addValue;
