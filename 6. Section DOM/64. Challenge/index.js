function insertAfter(newEle, exsitingEle) {
  exsitingEle.parentElement.insertBefore(newEle, exsitingEle.nextSibling);
}

const li = (document.createElement("li").textContent = "insert me after");

const item = document.createElement("li:nth-child(1)");

insertAfter(li, item);
