
//Model

const render = () => {
  let ser = document.getElementById('inp');
  const container = document.getElementById('todoContainer');
  const addButton = document.getElementById('addB');

  //Add List Item
  addButton.onclick = () => {

      if(ser.value !== ''){
        let id = new Date().getTime();

        const cont = document.createElement('div')
        cont.id = id;
        const deleteButton = document.createElement('button')
        deleteButton.innerText = 'Delete';
        deleteButton.style = "margin-left: 5px; margin:top: 5px;font-size: 18px; position: relative; bottom: 6px; padding: 3px;"
        cont.innerText = ser.value;
        cont.appendChild(deleteButton);
        container.appendChild(cont);
    
        ser.value = ''

        //Delete Button
        deleteButton.onclick = () => {
                const x = document.getElementById(id);
                x.innerHTML = '';
        }
      }
      
  }
}

render();








//View



//Controller

