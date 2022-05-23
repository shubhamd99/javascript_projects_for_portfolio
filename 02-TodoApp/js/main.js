let todo_wrapper = document.querySelector('.wrapper');
let newTodo = document.querySelector('.todo_name');
let addTodo = document.querySelector('.add_todo');
let todo = [];

addTodo.addEventListener('click', () => {
    if (newTodo.nodeValue !== '') {
        todo.push(newTodo.value);
        console.log(todo);

        let newTodo_list = document.createElement('div');
        newTodo_list.className = 'item';

        for (let i = 0; i < todo.length; i++) {
            newTodo_list.innerHTML = newTodo.value;
            todo_wrapper.appendChild(newTodo_list);
        }

        if (todo.length > 0) {
            let item = document.querySelectorAll('.item');
            for (let j = 0; j < item.length; j++) {
                let delete_todo = document.createElement('div');
                delete_todo.className = 'delete';
                delete_todo.innerHTML = 'X';
                item[j].appendChild(delete_todo);

                delete_todo.addEventListener('click', () => {
                    todo_wrapper.removeChild(item[j]);
                })
            }
        }

        newTodo.value = '';
    }
});

new Sortable(todo_wrapper, {
    animation: 300,
});