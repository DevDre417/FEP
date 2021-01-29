const redBx = document.querySelector('.grandParent');
const blueBx = document.querySelector('.parent');
const greenBx = document.querySelector('.child');

  greenBx.addEventListener("click", e => {

      console.log(e.target)
    
  })