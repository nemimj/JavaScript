getData("./movies.json", (data) => {
  console.log(data);
  getData("./directors.json", (data) => {
    console.log(data);
    getData("./heros.json", (data) => {
      console.log(data);
    });
  });
});

// using xmlhttp
async function getUsers() {
  const movies = await getUsers("./movies.json");
  const direcotrs = await getUsers("./directors.json");
  const heros = await getUsers("./heros.json");
  console.log(movies, direcotrs, heros);
  console.log("This will not execute till the await statments are over");
}

getUsers();

// Using Fetch
async function getUsersUsingFetch() {
  const moviesRes = await fetch("./movies.json");
  const movies = await moviesRes.json();

  const direcotrsRes = await fetch("./directors.json");
  const directors = await directorsRes.json();

  const herosRes = await fetch("./heros.json");
  const heros = await heros.json();

  console.log(movies, direcotrs, heros);
  console.log("This will not execute till the await statments are over");
}

getUsersUsingFetch();

// using promise all

async function fetchUsingPromiseAll() {
  const [movies, directors, heros] = await Promise.all([
    fetch("./movies.json").then((res) => res.json),
    fetch("./directors.json").then((res) => res.json),
    fetch("./heros").then((res) => res.json),
  ]);
}

fetchUsingPromiseAll();
