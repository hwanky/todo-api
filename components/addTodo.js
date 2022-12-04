import { createTodo, getTodos } from "../fetch.js";
import { renderTodos } from "./renderTodos.js";

const inputTextEl = document.querySelector(".input-text");
const todosEl = document.querySelector(".todos");

export async function addTodo() {
  if (inputTextEl.value) {
    let title = inputTextEl.value;
    await createTodo({ title });

    inputTextEl.value = "";
    todosEl.innerHTML = "";
    let todos = await getTodos();
    renderTodos(todos);
  } else {
    alert("할 일을 입력해 주세요");
  }
}
