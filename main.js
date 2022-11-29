import { getTodos } from "./components/getTodos.js";
import { createTodo } from "./components/createTodo.js";
import { renderTodos } from "./components/renderTodos.js";

async function test() {
  let todos = await getTodos();
  renderTodos(todos);
}

test();
