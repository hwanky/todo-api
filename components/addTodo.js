import { createTodo, getTodos } from "../fetch.js";
import { renderTodos } from "./renderTodos.js";

const todoTextEl = document.querySelector(".todo-text");
const todosEl = document.querySelector(".todos");

export async function addTodo() {
  if (todoTextEl.value) {
    let title = todoTextEl.value;
    await createTodo({ title });

    todoTextEl.value = "";
    todosEl.innerHTML = "";
    let todos = await getTodos();
    renderTodos(todos);
  } else {
    alert("할 일을 입력해 주세요");
  }
}
