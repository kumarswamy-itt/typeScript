let todoList = new Array();

function addTodo(todo: String) {
    todoList.push(todo);
    console.log("item added");
}

function viewTodoList() {
    for(var i = 0;i<todoList.length;i++) { 
        console.log(todoList[i]) 
     }
}

function viewTodo(index: number) {
        console.log("get from index : "+todoList[index]) ;
}

addTodo ("Work on Js");
addTodo ("Work on Angular");
addTodo ("Work on Html");
addTodo ("Work on React");

viewTodoList();
viewTodo(1);