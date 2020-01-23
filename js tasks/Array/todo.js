var todos = ["Buy New Shirt"];

var input = prompt("what would you like to do?");

while(input !== "quit") {
    //handle input
    if(input === "list") {
        listTodos();
    }   else if(input === "new") {
        addTodo();
    }   else if(input === "delete") {
        deleteTodo();
        } 
        //ak again for new input
    input = prompt("what would you like to do?");
}
console.log("OK, YOU QUIT THE APP");
 
function listTodos(){
    console.log("**********")
    todos.forEach(function(todo, index){
        console.log(index + ": " + todo);
    });
    console.log("**********")
}

function addTodo(){
    //ask for new todo
    var newTodo = prompt("Enter new todo");
    //add to Todos array
    todos.push(newTodo);
    console.log("Added Todo");

}

function deleteTodo() {
    //ask for new todo
    var index = prompt("Enter index of todo to delete");
    // delete that todo
    // splice
    todos.splice(index, 1);
    console.log("Deleted Todo");

}