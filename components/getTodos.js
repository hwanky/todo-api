import { API_URL, HEADER } from "../store/store.js";

export async function getTodos() {
  const res = await fetch(API_URL, {
    method: "GET",
    headers: HEADER,
  });
  const json = await res.json();

  return json;
}
