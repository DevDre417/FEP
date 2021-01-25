
//Model
let todos = [{
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

//Creating Todo
const createTodo = (title,dueDate) => {
  const id = new Date().getTime();

  todos.push({
  title: title,
  dueDate: dueDate,
  id: id
});
}
/////////////////////////


//Delete Todo
function removeTodo(idToDelete) {
  todos = todos.filter(function (todo) {
    if (todo.id == idToDelete) {
      return false;
    } else {
      return true;
    }
  });
  render();
}


//Controller
function addTodo() {
  const textbox = document.getElementById('todo-title');
  const title = textbox.value;
  

  const datepicker = document.getElementById('date-picker');
  const dueDate = datepicker.value;

  createTodo(title, dueDate);
  render();

};


function deleteTodo(event) {
  const deleteButton = event.target;
  const idToDelete = deleteButton.id
  removeTodo(idToDelete);
  
}
/////////////////////////////////////////////


//View
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





