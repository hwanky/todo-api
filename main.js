import { addTodo } from "./components/addTodo.js";
import { renderTodos } from "./components/renderTodos.js";
import { getTodos } from "./fetch.js";

const addBtnEl = document.querySelector(".add-btn");

async function test() {
  let todos = await getTodos();
  renderTodos(todos);
}

test();

addBtnEl.addEventListener("click", async (event) => {
  event.preventDefault();
  await addTodo();
});
