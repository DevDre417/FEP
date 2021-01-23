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
  const idTodelete = deleteButton.id

todos = todos.filter(function (todo) {
    if (todo.id == idTodelete) {
      return false;
    } else {
      return true;
    }
  });
  render();
}



let arrr = [55,-2,4,3,5,1,2,0,-3];

const max = (arrr) => Math.max(...arrr);
const min = (arrr) => Math.min(...arrr);

const minx = arrr.filter((item) => item >= 0);



console.log(max(arrr));
console.log(min(arrr));
console.log(minx);



const fruits = ['cherry','apple','orange','apple','banana','apple', 'orange']

const pickApples = (s) => {
  let d =[]
  fruits.forEach(function (a){
    if(a !== 'apple'){
      d.push(a);
    };
  })
  d.push('apple');
return d;
}

const pickFruits = (s) => x = [...new Set(s)];
const pickFruitsx = (s) => {
   
   console.log(s);
}


console.log(pickApples(fruits));
console.log(pickFruits(fruits));
console.log(pickFruitsx(fruits));
