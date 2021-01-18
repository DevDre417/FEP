const todos = [{
  title: 'Get Groceries',
  dueDate: '01-01-1990'
},
{
  title: 'Wash car',
  dueDate: '03-03-1991'
},
{
  title: 'Make dinner',
  dueDate: '04-04-1992'
}];


render();


function addTodo() {
  const textbox = document.getElementById('todo-title');
  const title = textbox.value;
  

  const datepicker = document.getElementById('date-picker');
  const dueDate = datepicker.value;

  todos.push({title: title,
  dueDate: dueDate});
  render();
}

function render(){
  //reset our list to be empty
  document.getElementById('todo-list').innerHTML = '';

  
  todos.forEach(function (todo) {
    const element = document.createElement('div');
    element.innerText = `${todo.title} ${todo.dueDate}`;
    const todolist = document.getElementById('todo-list');
    todolist.appendChild(element);
  }) ;
}  


//
const cartTotal = arr => {
  let x; 
  let z = [];
  
  for (let i=0;i<arr.length;i++){
    x = arr[i].price * arr[i].quantity;
    z.push(x);
  }
  let a = z.reduce((a,b) => a+b);
  console.log(a);
}

const cartArray = [{
  name: 'Apple',
  price: 4,
  quantity: 2
},{
  name: 'Orange',
  price: 3,
  quantity: 3
}
]


cartTotal(cartArray);

let p = 0;
for (let n of cartArray){
 let b = n.price * n.quantity + p
console.log(b);
}