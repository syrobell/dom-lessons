const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo");
const listItem = document.querySelector(".list-group");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearBtn = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() {
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
    form.addEventListener("submit", addToDo);
    secondCardBody.addEventListener("click", deleteTodoFromUI);
    filter.addEventListener("keyup", filterTodo);
    clearBtn.addEventListener("click", deleteAllTodos);

}



function filterTodo(e) {
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");


    listItems.forEach(function(listItem) {
        const value = listItem.textContent.toLowerCase();

        if (value.indexOf(filterValue) === -1) {
            listItem.setAttribute("style", "display: none !important");
        } else {
            listItem.setAttribute("style", "display: block");
        }

    })
}

function addToDo(e) {

    let newTodo = input.value.trim();

    addToDoToUI(newTodo);
    addToDoToStorage(newTodo);

    e.preventDefault();
}

function loadAllTodosToUI() {
    let todos = checkTodoFromStorage();

    todos.forEach(todo => {
        addToDoToUI(todo);

    });

}

function addToDoToUI(newTodo) {

    // Bu yöntemle bütün elementler oluşturuluyor ve fonksiyondan gelen newTodo değişkeni
    // todo değişkeninin içerisine yazdırılıyor

    // let list = document.createElement("li")
    // let tag = document.createElement("a");
    // let closeBut = document.createElement("i");
    // let todo = document.createTextNode(newTodo);


    // Aşağı bölümde ise yukarıda oluşturulan elementlerin classları ve içerikleri oluşturuluyor
    // listItem.appendChild(list) yazdığımız zaman kod çalışacaktır.


    // closeBut.className = ("fa fa-remove");
    // tag.href = "#";
    // tag.className = ("delete-item");
    // tag.appendChild(closeBut);
    // list.className = ("list-group-item d-flex justify-content-between");
    // list.appendChild(todo);
    // list.appendChild(tag);

    //burada ise direkt olarak listItem dom'unun innerHtmline ekleme yaparak ilerliyoruz.

    listItem.innerHTML += `
    
    <li class="list-group-item d-flex justify-content-between">${newTodo}<a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>

                        </li>
    `



}

function checkTodoFromStorage() {

    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    return todos;
}

function addToDoToStorage(newTodo) {
    let todos = checkTodoFromStorage();

    todos.push(newTodo);

    localStorage.setItem("todos", JSON.stringify(todos));

}

function deleteTodoFromUI(e) {
    if (e.target.className === "fa fa-remove") {

        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent.trim());

    }
}

function deleteTodoFromStorage(deleteTodo) {
    let todos = checkTodoFromStorage();

    todos.forEach(function(todo, index) {
        if (todo === deleteTodo) {
            todos.splice(index, 1);
        }
    })

    localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteAllTodos() {
    if (confirm("Tümünü Silmek İstediğinize Emin misiniz?"))
        while (listItem.firstElementChild != null) {
            listItem.removeChild(listItem.firstElementChild);
        }
    localStorage.removeItem("todos");

}