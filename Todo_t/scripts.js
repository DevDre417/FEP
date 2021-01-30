  let ser = document.querySelector('#inp');
  const container = document.querySelector('#todoContainer');
  const addButton = document.querySelector('#addB');
  const clearButton = document.querySelector('#clearB');
  clearButton.style.color = "red";
  //Add List Item

  const render = () => {
  addButton.onclick = () => {
    const deleteButton = document.createElement('button')
    let id = new Date().getTime();

   

      if(ser.value !== ''){
        const cont = document.createElement('div')
        cont.id = id;
        
        deleteButton.innerText = 'Delete';
        deleteButton.style = "margin-left: 5px; margin:top: 5px;font-size: 18px; position: relative; bottom: 6px; padding: 3px;"
        cont.innerText = ser.value;
        cont.appendChild(deleteButton);
        container.appendChild(cont);
    
        ser.value = '';


      }

//Delete Button
      deleteButton.onclick = () => {
        const x = document.getElementById(id);
        x.innerHTML = '';
}
  }
}

render();






ser.value.addEventListener("input", val => {
  if(val.keycode == 13){
        console.log('12')
  }
})


