const library = [
  {
    title: "The SpiTech",
    author: "nemi",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "The WindShield",
    author: "bhara",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;

const { title: firstBook } = library[0];
console.log(firstBook);

const json = JSON.stringify(library);
console.log(json);
