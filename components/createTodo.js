import { API_URL, HEADER } from "../store/store.js";

export async function createTodo() {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: HEADER,
    body: JSON.stringify({
      title: "저녁 먹기!",
    }),
  });
  const json = await res.json();

  return json;
}
