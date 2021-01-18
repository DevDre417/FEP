const todos = [{
  title: 'Get Groceries',
  dueDate: '01-01-1990'
},
{
  title:'Get Groceries', 
  dueDate: '02-02-1991'
},
{
  title: 'Wash car',
  dueDate: '03-03-1992'
},
{
  title: 'Make dinner',
  dueDate: '04-04-1993'
}];


render();


function addTodo() {
  const textbox = document.getElementById('todo-title');
  const title = textbox.value;
  

  const datepicker = document.getElementById('date-picker');
  const dueDate = datepicker.value;

  todos.push(title);
  render();
}

function render(){
  //reset our list to be empty
  document.getElementById('todo-list').innerHTML = '';

  
  todos.forEach(function (todoTitle) {
    const element = document.createElement('div');
    element.innerText = todoTitle;
    const todolist = document.getElementById('todo-list');
    todolist.appendChild(element);
  }) ;
}  

