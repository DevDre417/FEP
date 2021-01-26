
//Model

const render = () => {
  const ser = document.getElementById('inp');
  
  const container = document.getElementById('todoContainer');


  const addButton = document.getElementById('addB');
  addButton.onclick = () => {
    const listItem = ser.value;
    const cont = document.createElement('div')
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete';
    deleteButton.style = "margin-left: 5px; margin:top: 5px;font-size: 18px; position: relative; bottom: 5px;"

    cont.innerText = listItem;
   


    cont.appendChild(deleteButton);
    container.appendChild(cont);
   
  }
}


render();

//View



//Controller

