const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNum = [];

evenNum = numbers.filter(function (ele) {
  return ele % 2 == 0;
});

// short form
evenNum = numbers.filter((ele) => ele % 2 == 0);
console.log(evenNum);

// same with foreach

numbers.forEach((ele) => {
  if (ele % 2 == 0) evenNum.push(ele);
});

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

// get retail company
const retail = companies.filter((ele) => ele.category == "Retail");
console.log(retail);

const companiesBasedOnYears = companies.filter(
  (ele) => ele.start >= 1980 && ele.end <= 2005
);
console.log(companiesBasedOnYears);

const lastedTenYears = companies.filter((ele) => ele.end - ele.start >= 10);
