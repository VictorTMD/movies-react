const API = process.env.REACT_APP_API;
const TOKEN = process.env.REACT_APP_APITOKEN;

export async function get(path) {
  const result = await fetch(API + path, {
    headers: {
      Authorization: 'Bearer ' + TOKEN,
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  return await result.json();
}
