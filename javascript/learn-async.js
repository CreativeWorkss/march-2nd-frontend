// async / await
// can you please write the code that explains aysnc . await in JS?

async function getData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let final = await response.json();
    console.log("data is", final);
  } catch (error) {
    console.log("error", error);
  }
}

getData();

// 1)
