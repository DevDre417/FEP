const redBx = document.querySelector('.grandParent');
const blueBx = document.querySelector('.parent');
const greenBx = document.querySelector('.child');

  redBx.addEventListener("click", e => {

      console.log('red')
    
  },{capture: false})

  blueBx.addEventListener("click", e => {

    console.log('blue')
  
})

greenBx.addEventListener("click", e => {

  console.log('green');

})


document.addEventListener("click", e => {

  console.log('doc');

})