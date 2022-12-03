const API_URL = `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos`;
const HEADER = {
  "content-type": "application/json",
  apikey: "FcKdtJs202209",
  username: "KDT3_ChoiJiHwan",
};

export async function getTodos() {
  const res = await fetch(API_URL, {
    method: "GET",
    headers: HEADER,
  });
  const json = await res.json();

  return json;
}

export async function createTodo({ title, order }) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: HEADER,
    body: JSON.stringify({ title, order }),
  });
  const json = await res.json();

  return json;
}

export async function deleteTodo(id) {
  const res = await fetch(API_URL + `/${id}`, {
    method: "DELETE",
    headers: HEADER,
  });
  const json = await res.json();

  return json;
}
