import { deleteTodo, editTodo, getTodos } from "../fetch.js";

export async function renderTodos(todos) {
  console.log(todos);
  const todosEl = document.querySelector(".todos");
  const todoItems = todos.map((todo) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    todoItem.innerHTML = /* HTML */ `
      <input type="checkbox" class="checkbox-btn" />
      title: ${todo.title} done: ${todo.done}
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">X</button>
    `;

    return todoItem;
  });

  if (todoItems.length) {
    todosEl.append(...todoItems);
  }

  const deleteBtnEl = document.querySelectorAll(".delete-btn");
  const checkBtnEl = document.querySelectorAll(".checkbox-btn");
  const editBtnEl = document.querySelectorAll(".edit-btn");

  // 삭제
  for (let i = 0; i < deleteBtnEl.length; i++) {
    deleteBtnEl[i].addEventListener("click", async (event) => {
      event.preventDefault();
      await deleteTodo(todos[i].id);
      todosEl.innerHTML = "";
      let newTodos = await getTodos();
      await renderTodos(newTodos);
    });
  }

  // 체크박스
  for (let i = 0; i < checkBtnEl.length; i++) {
    checkBtnEl[i].addEventListener("change", async (event) => {
      event.preventDefault();
      let title = todos[i].title;
      let done = checkBtnEl[i].checked;
      editTodo(todos[i].id, { title, done });

      console.log(done);
    });

    if (todos[i].done) {
      checkBtnEl[i].checked = true;
    }
  }
}
