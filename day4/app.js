/* Method
setItem("key", "value")
getItem("key")
removeItem("key")
clear()
*/

document.getElementById('add-button').addEventListener('click', addTodo);
document.getElementById('todo-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});

function addTodo() {
    let input = document.getElementById('todo-input');
    let inputValue = input.value.trim();
    if (inputValue) {
        saveTodo(inputValue);
        input.value = '';
        renderTodos();
    }
}

function renderTodos() {
    let todos = getTodos();
    let todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        let li = document.createElement('li');
        li.textContent = todo;
        li.addEventListener('click', function() {
            removeTodo(index);
        });
        todoList.appendChild(li);
    });
}

function getTodos() {
    let todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
}

function saveTodo(todo) {
    let todos = getTodos();
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function removeTodo(index) {
    let todos = getTodos();
    todos.splice(index, 1); // The splice() method adds new items to an array.
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
}

// Initial render
renderTodos();
