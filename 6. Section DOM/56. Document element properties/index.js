let output;

output = document.all; // this is deprecated

output = document.documentElement;

output = document.head;
output = document.body;

output = document.head.children;
output = document.body.children;

output = document.doctype;
output = document.URL;
output = document.domain;
output = document.characterSet;
output = document.contentType;

output = document.forms;
output = document.forms[0].action;
output = document.forms[0].method;
output = document.forms[0].id;

output = document.links;
output = document.links[0];
output = document.links[0].href;
output = document.links[0].href = "https://facebook.com";
output = document.links[0].id = "google-link";
output = document.links[0].className = "google-class";
output = document.links[0].classList;
console.log(output);

//* we can't iterate over HTML Collection
const forms = Array.from(document.forms);
forms.forEach((ele) => console.log(ele));
