let todos = ['Get Groceries','Wash car','Make dinner'];
todos.push('another todo');


todos.forEach(function (todoTitle) {
  let element = document.createElement('div');
  element.innerText = todoTitle;
  document.body.appendChild(element);
}
) 

function toUpper(param){
    let d = [];
    for(i=0;i<param.length;i++) {
    let x =  param[i].toUpperCase();
        d.push(x);
    }
    return d;
}


console.log(toUpper(['asdad','asdsadas']));