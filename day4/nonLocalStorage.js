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
        let todoList = document.getElementById('todo-list');
        let li = document.createElement('li');
        li.textContent = inputValue;
        li.addEventListener('click', function() {
            todoList.removeChild(li);
        });
        todoList.appendChild(li);
        input.value = '';
    }
}
