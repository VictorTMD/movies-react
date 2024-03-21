const API = process.env.REACT_APP_API;
// const TOKEN = process.env.REACT_APP_TOKEN;

export async function get(path) {
  const result = await fetch(API + path, {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNGQ0ZWE3MjgwOWJhMTY0NzcyNDhhMDI3OWE5N2M3ZiIsInN1YiI6IjY1ZjQxZDc5Mzg1MjAyMDE4NmUzMWZjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OdFcKGX615dosYQ5_VnV8W_GaqsMZPQD2ju1TrozVRw',
      'Content-Type': 'application/json;charset=utf-8',
    },
  });
  return await result.json();
}
