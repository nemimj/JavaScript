// Json

const j = [
  {
    name: "nemi",
  },
  {
    name: "john",
  },
];

// ! we have to add "" for both key and value in json
// js object

const obj = {
  name: "john",
};

//converting obj to json

const js = JSON.stringify(obj);
console.log(js);

// converting json to obj
const ob = JSON.parse(js);
console.log(ob);

const json = [
  {
    name: "nemi",
    title: "the king",
  },
];
