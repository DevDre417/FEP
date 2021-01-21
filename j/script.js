const todos = [{
  title: 'Get Groceries',
  dueDate: '01-01-1990',
  id: 'id1'
},
{
  title: 'Wash car',
  dueDate: '03-03-1991',
  id: 'id2'
},
{
  title: 'Make dinner',
  dueDate: '04-04-1992',
  id: 'id3'
}];


render();


function addTodo() {
  const textbox = document.getElementById('todo-title');
  const title = textbox.value;
  

  const datepicker = document.getElementById('date-picker');
  const dueDate = datepicker.value;

  const id = new Date().getTime();

  todos.push({
  title: title,
  dueDate: dueDate,
  id: id

});
  render();
}



function render(){
  //reset our list to be empty
  document.getElementById('todo-list').innerHTML = '';

  
  todos.forEach(function (todo) {
    const element = document.createElement('div');
    element.innerText = `${todo.title} ${todo.dueDate}`;
    
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.style.margin = "5px 0 0 10px";
    
    deleteButton.onclick = deleteTodo;
    deleteButton.id = todo.id;
    element.appendChild(deleteButton);
  
    const todolist = document.getElementById('todo-list');
    todolist.appendChild(element);
    

  }) ;
}  


function deleteTodo(event) {
  const deleteButton = event.target;
  const idtodelete = deleteButton.id
}


const createCart = () => {

  for (let items in pricesOfFood) {
   
    let z = document.createElement('div');
    z.innerText = items;
    document.body.appendChild(z);
    
}

}

let total = 0;

const pricesOfFood = {
  Apple: 3,
  Orange: 4,
  Egg: 2
}

createCart(pricesOfFood);






// const cartArray = [{
//   name: 'Apple',
//   price: 4,
//   quantity: 2
// },{
//   name: 'Orange',
//   price: 3,
//   quantity: 3
// },{
//   name: 'Bread',
//   price: 10,
//   quantity: 5
// }
// ]

// //
// const cartTotal = arr => {
//   let x; 
//   let z = [];
  
//   for (let i=0;i<arr.length;i++){
//     x = arr[i].price * arr[i].quantity;
//     z.push(x);
//   }
//   var a = z.reduce((a,b) => a+b);
  
// }
// cartTotal(cartArray);

// //

// let recep = document.createElement('div');
// recep.id = 'receipt';
// document.body.appendChild(recep);

// const displayReceipt = arr => {
//   recep.innerHTML = '';

// let g = [];
// let z = [];

//   for(let i=0;i<arr.length;i++) {
//     let x = document.createElement('div')
//     document.body.appendChild(x);

//     x.innerText = `${arr[i].name} $${arr[i].price}*${arr[i].quantity} = ${arr[i].price*arr[i].quantity}`;
//     g.push(x.innerText)
  
//   }
//   let tot = document.createElement('div')
//   document.body.appendChild(tot);

//   for (let i=0;i<arr.length;i++){
//     x = arr[i].price * arr[i].quantity;
//     z.push(x);
//   }
//   var a = z.reduce((a,b) => a+b);
//   tot.innerText = `Cart total = $${a}`;
// }

// displayReceipt(cartArray);

