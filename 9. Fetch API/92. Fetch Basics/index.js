// fetch api in json

fetch("./movies.json")
  .then((res) => res.json())
  .then((data) => console.log(data));

// fetch api in text file

fetch("./file.txt")
  .then((res) => res.text()) // text method
  .then((data) => console.log(data));

// fetch in public api

fetch("https://api.github.com/users/nemimj")
  .then((res) => res.json())
  .then((data) => console.log(data));
