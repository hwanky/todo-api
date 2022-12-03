import { deleteTodo, getTodos } from "../fetch.js";

export async function renderTodos(todos) {
  console.log(todos);
  const todosEl = document.querySelector(".todos");
  const todoItems = todos.map((todo) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    todoItem.innerHTML = /* HTML */ `
      title: ${todo.title} done: ${todo.done}
      <button class="delete-btn">X</button>
    `;

    return todoItem;
  });

  if (todoItems.length) {
    todosEl.append(...todoItems);
  }

  const deleteBtnEl = document.querySelectorAll(".delete-btn");

  for (let i = 0; i < deleteBtnEl.length; i++) {
    deleteBtnEl[i].addEventListener("click", async (event) => {
      event.preventDefault();
      console.log(todos[i].id);
      await deleteTodo(todos[i].id);
      todosEl.innerHTML = "";
      let newTodos = await getTodos();
      await renderTodos(newTodos);
    });
  }
}
