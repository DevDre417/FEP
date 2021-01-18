const todos = ['Get Groceries','Wash car','Make dinner'];


render();


function addTodo() {
  const textbox = document.getElementById('todo-title');
  const title = textbox.value;
  todos.push(title);

  const datepicker = document.getElementById('date-picker');
  const dueDate = datepicker.value;
  
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

