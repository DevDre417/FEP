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

//1
let btn = document.createElement('button')
btn.id="todo-button";
btn.innerText = 'in-progress';
let oc;
btn.onclick = oc = () => btn.innerText = 'Done';
document.body.appendChild(btn);

//1
let newel = document.createElement('div');
document.body.appendChild(newel);
newel.id = 'counter';
let newell = document.getElementById('counter');

//2
let btn2 = document.createElement('button');
document.body.appendChild(btn2);
btn2.innerText = 'Up';

let count = 0;
newel.innerText= count;

btn2.onclick = function () {newel.innerText = count++;}





