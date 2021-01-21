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




//

const pricesOfFood = {
  Apple: 3,
  Orange: 4,
  Egg: 2
}
let total = 0;
const createCart = () => {
  let names = Object.keys(pricesOfFood);
  let prices = Object.values(pricesOfFood);
  console.log(names);
  console.log(prices);


  for(let i=0;i<names.length;i++) {
  let el = document.createElement('div');
  let price = prices[i];
  el.innerHTML = names[i] + ' $' + price;
  document.body.appendChild(el);
  let btn = document.createElement('button');
  el.appendChild(btn)
  btn.innerText = 'Add';
  btn.onclick = function  totalz(){
    let tot = (total = total + prices[i]);
    console.log(tot);
    return tot;
    
}
    }

  
}


createCart(pricesOfFood)
