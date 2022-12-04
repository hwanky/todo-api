import { addTodo } from "./components/addTodo.js";
import { renderTodos } from "./components/renderTodos.js";
import { deleteTodo, getTodos } from "./fetch.js";

const addBtnEl = document.querySelector(".add-btn");
const deleteAllBtnEl = document.querySelector(".deleteAll-btn");
const todosEl = document.querySelector(".todos");

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
});
