// querySelectorAll()

const listItems = document.querySelectorAll(".items");
console.log(listItems[1].innerText);

listItems[1].style.color = "red";

listItems.forEach((ele, index) => {
  ele.style.color = "red";
  if (index === 1) ele.remove();

  if (index === 0)
    ele.innerHTML = `orange <button class='remove-item btn-link'>
        <i class="fa-solid fa-xmark"></i>
    </button>`;
});

const listItem2 = document.getElementsByClassName("item");

console.log(listItem2[2].innerText);

const listItemArray = Array.from(listItem2);

const listItem3 = document.getElementsByTagName("li");
console.log(listItem3[0].innerText);
