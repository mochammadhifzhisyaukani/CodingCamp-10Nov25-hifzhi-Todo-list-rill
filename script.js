/// Temporary storage for todo items
let todos = [];

// Global references to DOM elements
const todoInput = document.getElementById("input-text");
const todoDate = document.getElementById("input-date");
const filterInput = document.getElementById("filter-date");
const todoList = document.getElementById("todo-list");

/// Function to add a new todo item
function addTodo() {
    if (!todoInput || !todoDate) {
        alert("Input elemen tidak ditemukan. Periksa kembali ID di HTML.");
        return;
    }

    if (todoInput.value === '' || todoDate.value === '') {
        alert("Silakan isi kedua kolom terlebih dahulu.");
    } else {
        todos.push({ text: todoInput.value, date: todoDate.value });
        todoInput.value = '';
        todoDate.value = '';
        renderTodos();
    }
}

/// Function to render todo items to the DOM
function renderTodos() {
    if (!todoList) return;

    todoList.innerHTML = '';

    if (todos.length === 0) {
        todoList.innerHTML = '<li><p class="text-gray-500">Tidak ada tugas yang tersedia.</p></li>';
        return;
    }

    todos.forEach(todo => {
        todoList.innerHTML += `
        <li>
            <p class="text-2xl">${todo.text} 
            <span class="text-sm text-gray-500">(${todo.date})</span></p>
            <hr />
        </li>`;
    });
}

/// Function to reset all todo items
function resetList() {
    if (!todoInput || !todoDate || !todoList) return;

    if (confirm("Yakin mau reset semua daftar tugas?")) {
        todos = [];
        todoInput.value = "";
        todoDate.value = "";
        renderTodos();
        alert("Daftar tugas berhasil di-reset!");
    }
}

/// Function to filter todos by date
function filterTodos() {
    if (!filterInput || !todoList) return;

    const filterDate = filterInput.value;

    if (filterDate === '') {
        alert("Silakan pilih tanggal untuk memfilter.");
        return;
    }

    const filteredTodos = todos.filter(todo => todo.date === filterDate);
    todoList.innerHTML = '';

    if (filteredTodos.length === 0) {
        todoList.innerHTML = '<li><p class="text-gray-500">Tidak ada tugas pada tanggal tersebut.</p></li>';
    } else {
        filteredTodos.forEach(todo => {
            todoList.innerHTML += `
            <li>
                <p class="text-2xl">${todo.text} 
                <span class="text-sm text-gray-500">(${todo.date})</span></p>
                <hr />
            </li>`;
        });
    }
}
