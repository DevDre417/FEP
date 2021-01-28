
//Model

const render = () => {
  let ser = document.querySelector('#inp');
  const container = document.querySelector('#todoContainer');
  const addButton = document.querySelector('#addB');
  const clearButton = document.querySelector('#clearB');
  clearButton.style.color = "red";
 
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
    
        ser.value = '';

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

