import { addTodo } from "./components/addTodo.js";
import { renderTodos } from "./components/renderTodos.js";
import { deleteTodo, getTodos } from "./fetch.js";

const addBtnEl = document.querySelector(".add-btn");
const deleteAllBtnEl = document.querySelector(".deleteAll-btn");
const todosEl = document.querySelector(".todos");
const viewOptionEl = document.querySelector(".view-option");

document.querySelector(".input-text").focus();

(async () => {
  let todos = await getTodos();
  renderTodos(todos);
})();

addBtnEl.addEventListener("click", async (event) => {
  event.preventDefault();
  await addTodo();
});

deleteAllBtnEl.addEventListener("click", async (event) => {
  event.preventDefault();
  let todos = await getTodos();

  for (const todo of todos) {
    if (todo.done) {
      await deleteTodo(todo.id);
    }
  }

  todosEl.innerHTML = "";
  let newTodos = await getTodos();
  renderTodos(newTodos);
  viewOptionEl.value = "all";
});

viewOptionEl.addEventListener("change", async (event) => {
  event.preventDefault();
  let todos = await getTodos();
  const todoTextEl = document.querySelectorAll(".todo-text");

  if (viewOptionEl.value === "true") {
    todos.forEach((todo, idx) => {
      if (!todo.done) {
        todoTextEl[idx].parentElement.style.display = "none";
      } else {
        todoTextEl[idx].parentElement.style.display = "flex";
      }
    });
  } else if (viewOptionEl.value === "false") {
    todos.forEach((todo, idx) => {
      if (todo.done) {
        todoTextEl[idx].parentElement.style.display = "none";
      } else {
        todoTextEl[idx].parentElement.style.display = "flex";
      }
    });
  } else if (viewOptionEl.value === "all") {
    todos.forEach((todo, idx) => {
      todoTextEl[idx].parentElement.style.display = "flex";
    });
  }
});
