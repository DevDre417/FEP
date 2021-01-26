
const render = () => {
  const ser = document.getElementById('inp');
  
  const container = document.getElementById('todoContainer');


  const addButton = document.getElementById('addB');
  addButton.onclick = () => {
    const listItem = ser.value;
    const cont = document.createElement('div')
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete';


    cont.innerText = listItem;
    deleteButton.innerText = 'delete';


    container.appendChild(cont);
    cont.appendChild(deleteButton);
  }
}


render();


