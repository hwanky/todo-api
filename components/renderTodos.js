import { deleteTodo, editTodo, getTodos } from "../fetch.js";

export async function renderTodos(todos) {
  const todosEl = document.querySelector(".todos");
  const todoItems = todos.map((todo) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    todoItem.innerHTML = /* HTML */ `
      <input type="checkbox" class="checkbox-btn" />
      <div class="todo-text">${todo.title}</div>
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
  const todoTextEl = document.querySelectorAll(".todo-text");
  const viewOptionEl = document.querySelector(".view-option");

  // 삭제
  deleteBtnEl.forEach((deleteBtn, idx) => {
    deleteBtn.addEventListener("click", async (event) => {
      event.preventDefault();
      await deleteTodo(todos[idx].id);
      todosEl.innerHTML = "";
      let newTodos = await getTodos();
      renderTodos(newTodos);
      viewOptionEl.value = "all";
    });
  });

  // 체크박스
  checkBtnEl.forEach((checkBtn, idx) => {
    checkBtn.addEventListener("change", async (event) => {
      event.preventDefault();
      let title = todos[idx].title;
      let done = checkBtn.checked;
      await editTodo(todos[idx].id, { title, done });
      todosEl.innerHTML = "";
      let newTodos = await getTodos();
      renderTodos(newTodos);
      viewOptionEl.value = "all";
    });

    if (todos[idx].done) {
      checkBtn.checked = true;
      todoTextEl[idx].style.textDecoration = "line-through";
      editBtnEl[idx].style.display = "none";
    } else {
      todoTextEl[idx].style.textDecoration = "none";
    }
  });

  // 수정
  editBtnEl.forEach((editBtn, idx) => {
    editBtn.addEventListener("click", async (event) => {
      event.preventDefault();
      editBtn.style.display = "none";

      todoTextEl[idx].innerHTML = /* HTML */ `
        <form>
          <input type="text" class="edit-text" value=${todos[idx].title} />
          <button class="edit-complete-btn">Complete</button>
        </form>
      `;

      const editCompleteBtnEl =
        todoTextEl[idx].querySelector(".edit-complete-btn");
      const editTextEl = todoTextEl[idx].querySelector(".edit-text");

      editTextEl.focus();
      editTextEl.setSelectionRange(
        editTextEl.value.length,
        editTextEl.value.length
      );

      editCompleteBtnEl?.addEventListener("click", async (event) => {
        event.preventDefault();

        await editTodo(todos[idx].id, {
          title: editTextEl.value,
          done: checkBtnEl[idx].checked,
        });
        todosEl.innerHTML = "";
        let newTodos = await getTodos();
        renderTodos(newTodos);
        viewOptionEl.value = "all";
      });
    });
  });
}
