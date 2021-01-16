let todos = ['Get Groceries','Wash car','Make dinner'];


todos.forEach(function (todoTitle) {
  let element = document.createElement('div');
  element.innerText = todoTitle;
  document.body.appendChild(element);
}) ;

function addTodo() {
  let textbox = document.getElementById('todo-title');
  let title = textbox.value;
  todos.push(title);
}


let btn = document.createElement('button')
btn.innerText = 'in-progress';
let oc;
btn.onclick = oc = () => btn.innerText = 'Done';

document.body.appendChild(btn);

