# π ν  μΌ κ΄λ¦¬(Todo)

μ£Όμ΄μ§ APIλ₯Ό νμ©ν΄ '[μμ± μμ](https://beautiful-daifuku-b9462c.netlify.app/)' μ²λΌ μμ λ‘­κ² ν  μΌ κ΄λ¦¬ νλ‘μ νΈλ₯Ό λ§λ€μ΄λ³΄μΈμ.

## λ°°ν¬ μ£Όμ

[DEMO](https://kdt3-m3-todo-api.netlify.app/)

## μκ΅¬μ¬ν­

νμ μκ΅¬μ¬ν­μ κΌ­ λ¬μ±ν΄μΌ νλ λͺ©νλ‘, μμ /μ­μ λ λΆκ°νκ³  μΆκ°λ κ°λ₯ν©λλ€.  
μ ν μκ΅¬μ¬ν­μ λ¨μ μμλ‘, μμ λ‘­κ² μΆκ°/μμ /μ­μ ν΄μ κ΅¬νν΄λ³΄μΈμ.  
κ° μκ΅¬μ¬ν­μ λ¬μ± ν λ§ν¬λ€μ΄μμ `- [x]`λ‘ νμνμΈμ.

### :exclamation: νμ

- [x] ν  μΌ λͺ©λ‘(List)μ΄ μΆλ ₯λΌμΌ ν©λλ€.
- [x] ν  μΌ ν­λͺ©(Item)μ μλ‘­κ² μΆκ°ν  μ μμ΄μΌ ν©λλ€.
- [x] ν  μΌ ν­λͺ©μ μμ ν  μ μμ΄μΌ ν©λλ€.
- [x] ν  μΌ ν­λͺ©μ μ­μ ν  μ μμ΄μΌ ν©λλ€.
- [x] jQuery, React, Vue λ± JS λΌμ΄λΈλ¬λ¦¬μ νλ μμν¬λ μ¬μ©νμ§ μμμΌ ν©λλ€.
- [x] μ€μ  μλΉμ€λ‘ λ°°ν¬νκ³  μ κ·Ό κ°λ₯ν λ§ν¬λ₯Ό μΆκ°ν΄μΌ ν©λλ€.

### :grey_question: μ ν

- [ ] κ°λ₯νλ€λ©΄, νμμ€ν¬λ¦½νΈλ₯Ό μ¬μ©ν΄λ³΄μΈμ.
- [ ] ν  μΌ ν­λͺ©μ μμλ₯Ό λ°κΏ μ μλλ‘ λ§λ€μ΄λ³΄μΈμ.
- [x] ν  μΌμ μλ£νμ§ μμ ν­λͺ©κ³Ό μλ£ν ν­λͺ©μ λΆλ₯ν΄μ μΆλ ₯ν΄λ³΄μΈμ.
- [x] ν  μΌμ μλ£ν ν­λͺ©μ ν λ²μ μ­μ ν  μ μλλ‘ λ§λ€μ΄λ³΄μΈμ.
- [ ] ν  μΌ ν­λͺ©μ μ΅μ  μμ μΌμ νμν΄λ³΄μΈμ.
- [ ] ν  μΌ λͺ©λ‘μ΄ μΆλ ₯λκΈ° μ μ λ‘λ© μ λλ©μ΄μμ΄ λ³΄μ΄λλ‘ λ§λ€μ΄λ³΄μΈμ.
- [ ] κΈ°ν λμμ΄ μλ£λκΈ° μ μ λ‘λ© μ λλ©μ΄μμ΄ λ³΄μ΄λλ‘ λ§λ€μ΄λ³΄μΈμ.
- [ ] μ°¨λ³νκ° κ°λ₯νλλ‘ νλ‘μ νΈλ₯Ό μ΅λν μμκ² λ§λ€μ΄λ³΄μΈμ.
- [ ] ν  μΌκ³Ό κ΄λ ¨λ κΈ°ν κΈ°λ₯λ κ³ λ €ν΄λ³΄μΈμ.

## API μ¬μ©λ²

μμ²­ μ£Όμ(Endpoint)

```curl
https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos
```

λͺ¨λ  API μμ²­(Request) `headers`μ μλ μ λ³΄κ° κΌ­ ν¬ν¨λΌμΌ ν©λλ€!  
`username`μ `KDT3_ParkYoungWoong`μ κ°μ΄ λ³Έλͺμ ν¬ν¨ν΄μΌ ν©λλ€!  
νμΈν  μ μλ μ¬μ©μμ DB μ λ³΄λ μμλ‘ μ­μ λ  μ μμ΅λλ€!

```json
{
  "content-type": "application/json",
  "apikey": "FcKdtJs202209",
  "username": "<YOUR_NAME>"
}
```

API μ¬μ© μμ:

```js
async function createTodo() {
  const res = await fetch(
    "https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        apikey: "FcKdtJs202209",
        username: "KDT3_ParkYoungWoong",
      },
      body: JSON.stringify({
        title: "μμΉ¨ λ¨ΉκΈ°!",
      }),
    }
  );
  const json = await res.json();
  console.log(json);

  return json;
}
```

### λͺ©λ‘ μ‘°ν

μ μ²΄ ν  μΌ λͺ©λ‘μ μ‘°νν©λλ€.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos
  \ -X 'GET'
```

μμ²­ λ°μ΄ν° νμ λ° μμ:

- μμ

μλ΅ λ°μ΄ν° νμ λ° μμ:

```ts
type ResponseValue = Todo[]; // ν  μΌ λͺ©λ‘

interface Todo {
  id: string; // ν  μΌ ID
  order: number; // ν  μΌ μμ
  title: string; // ν  μΌ μ λͺ©
  done: boolean; // ν  μΌ μλ£ μ¬λΆ
  createdAt: string; // ν  μΌ μμ±μΌ
  updatedAt: string; // ν  μΌ μμ μΌ
}
```

```json
[
  {
    "id": "mnIwaAPIAE1ayQmqekiR",
    "order": 0,
    "title": "JS κ³΅λΆνκΈ°",
    "done": false,
    "createdAt": "2021-10-28T05:18:51.868Z",
    "updatedAt": "2021-10-28T05:18:51.868Z"
  },
  {
    "id": "tMzPImGoWtRdJ6yyVv2y",
    "order": 1,
    "title": "κ³Όμ  PullRequest(PR) μμ±",
    "done": true,
    "createdAt": "2021-10-28T04:16:53.980Z",
    "updatedAt": "2021-10-28T09:40:17.955Z"
  },
  {
    "id": "Rq8BebKihCgteHHhMIRS",
    "order": 2,
    "title": "API μ€ν°λ",
    "done": false,
    "createdAt": "2021-10-28T04:17:02.510Z",
    "updatedAt": "2021-10-28T04:17:02.510Z"
  }
]
```

### λͺ©λ‘ μμ λ³κ²½

ν  μΌ λͺ©λ‘μ μμλ₯Ό λ³κ²½ν©λλ€.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/reorder
  \ -X 'PUT'
```

μμ²­ λ°μ΄ν° νμ λ° μμ:

```ts
interface RequestBody {
  todoIds: string[]; // μλ‘­κ² μ λ ¬ν  ν  μΌ ID λͺ©λ‘ (νμ!)
}
```

```json
{
  "todoIds": [
    "mnIwaAPIAE1ayQmqekiR",
    "tMzPImGoWtRdJ6yyVv2y",
    "GHrvr3LaPx1g7y2sNuaC",
    "Rq8BebKihCgteHHhMIRS"
  ]
}
```

μλ΅ λ°μ΄ν° νμ λ° μμ:

```ts
type ResponseValue = true; // μμ λ³κ²½ μ¬λΆ
```

### ν­λͺ© μΆκ°

ν  μΌ ν­λͺ©μ μλ‘­κ² μΆκ°ν©λλ€.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos
  \ -X 'POST'
```

μμ²­ λ°μ΄ν° νμ λ° μμ:

```ts
interface RequestBody {
  title: string; // ν  μΌ μ λͺ© (νμ!)
  order?: number; // ν  μΌ μμ
}
```

```json
{
  "title": "KDT κ³Όμ  μ€κ³ λ―Έν",
  "order": 2
}
```

μλ΅ λ°μ΄ν° νμ λ° μμ:

```ts
interface ResponseValue {
  id: string;
  order: number;
  title: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
}
```

```json
{
  "id": "7P8dOM4voAv8a8cfoeKZ",
  "order": 0,
  "title": "KDT κ³Όμ  μ€κ³ λ―Έν",
  "done": false,
  "createdAt": "2021-10-29T07:20:02.749Z",
  "updatedAt": "2021-10-29T07:20:02.749Z"
}
```

### ν­λͺ© μμ 

νΉμ  ν  μΌ ν­λͺ©μ μμ ν©λλ€.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/:todoId
  \ -X 'PUT'
```

μμ²­ λ°μ΄ν° νμ λ° μμ:

```ts
interface RequestBody {
  title: string; // ν  μΌ μ λͺ© (νμ!)
  done: boolean; // ν  μΌ μλ£ μ¬λΆ (νμ!)
  order?: number; // ν  μΌ μμ
}
```

```json
{
  "title": "Bootstrap μ€νμΌ μΆκ°",
  "done": false,
  "order": 2
}
```

μλ΅ λ°μ΄ν° νμ λ° μμ:

```json
{
  "id": "7P8dOM4voAv8a8cfoeKZ",
  "title": "Bootstrap μ€νμΌ μΆκ°",
  "done": false,
  "order": 2,
  "createdAt": "2021-10-29T07:20:02.749Z",
  "updatedAt": "2021-10-29T07:20:02.749Z"
}
```

### ν­λͺ© μ­μ 

νΉμ  ν  μΌ ν­λͺ©μ μ­μ ν©λλ€.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/:todoId
  \ -X 'DELETE'
```

μμ²­ λ°μ΄ν° νμ λ° μμ:

- μμ

μλ΅ λ°μ΄ν° νμ λ° μμ:

```ts
type ResponseValue = true;
```
