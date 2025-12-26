const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", addTodo);

function addTodo() {
  const text = todoInput.value.trim();

  if (text === "") {
    alert("Please enter a task!");
    return;
  }

  const todoDiv = document.createElement("div");
  todoDiv.className = "todo-item";

  todoDiv.innerHTML = `
    <span onclick="toggleComplete(this)">${text}</span>
    <button class="btn btn-sm btn-danger" onclick="deleteTodo(this)">❌</button>
  `;

  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

function deleteTodo(btn) {
  btn.parentElement.remove();
}

function toggleComplete(task) {
  task.parentElement.classList.toggle("completed");
}
