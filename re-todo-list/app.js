const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo");

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addToDo);
}

function addToDo(e) {

    let newTodo = input.value;

    console.log(newTodo);

    e.preventDefault();
}