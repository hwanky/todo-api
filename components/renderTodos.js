import { todosEl } from "../store/store.js";

export async function renderTodos(todos) {
  console.log(todos);
  const todoItems = todos.map((todo) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    todoItem.innerHTML = /* HTML */ ` title: ${todo.title} done: ${todo.done} `;

    return todoItem;
  });
  if (todoItems.length) {
    todosEl.append(...todoItems);
  }
}
