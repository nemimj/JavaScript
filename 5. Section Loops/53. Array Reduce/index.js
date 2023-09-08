const numbers = [1, 2, 3, 4, 5, 6, 7];

const multipleOfTwo = numbers.map((ele) => ele * 2);
console.log(multipleOfTwo);

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

// companies with their names
const companyName = companies.map((ele) => ele.name);
console.log(companyName);

// companies with thier names and category
const companyNameAndCategory = companies.map((ele) => ({
  name: ele.name,
  category: ele.category,
}));
console.log(companyNameAndCategory);

// companies with their names and length of the company year
const companyAndYears = companies.map((ele) => ({
  name: ele.name,
  yearsLength: ele.end - ele.start,
}));
console.log(companyAndYears);

// chaining and mapping
const squareAndRoot = numbers
  .map((ele) => Math.sqrt(ele))
  .map((sqrt) => sqrt * 2);
console.log(squareAndRoot);

// longer version

const squareAndRoot = numbers.map(function (ele)=>{
    return Math.sqrt(ele)
}).map(function(num)=>{
  return num*2
})

// chaining different methods
const evenDobuled = numbers
  .filter((ele) => ele % 2 == 0)
  .map((even) => even * 2);
console.log(evenDobuled);
