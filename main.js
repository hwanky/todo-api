const todosEl = document.querySelector(".todos");

async function createTodo() {
  const res = await fetch(
    "https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        apikey: "FcKdtJs202209",
        username: "KDT3_ChoiJiHwan",
      },
      body: JSON.stringify({
        title: "점심 먹기!",
      }),
    }
  );
  const json = await res.json();

  return json;
}

async function getTodos() {
  const res = await fetch(
    "https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos",
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        apikey: "FcKdtJs202209",
        username: "KDT3_ChoiJiHwan",
      },
    }
  );
  const json = await res.json();

  return json;
}

async function renderTodos(todos) {
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

async function test() {
  let todos = await getTodos();
  renderTodos(todos);
  console.log(todos.length);
}

test();
