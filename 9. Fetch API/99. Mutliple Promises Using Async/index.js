getData("./movies.json", (data) => {
  console.log(data);
  getData("./directors.json", (data) => {
    console.log(data);
    getData("./heros.json", (data) => {
      console.log(data);
    });
  });
});
