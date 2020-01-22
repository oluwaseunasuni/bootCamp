var todos = ["Buy New Shirt"];

var input = prompt("what would you like to do?");

while(input !== "quit") {
    //handle input
    if(input === "list") {
        console.log(todos);
    } else if(input === "new") {
        //ask for new todo
        var newTodo = prompt("Enter new todo");
        //add todos to array
        todos.push(newTodo);
    }
    //ak again for new input
    input = prompt("what would you like to do?");
}
console.log("OK, YOU QUIT THE APP");