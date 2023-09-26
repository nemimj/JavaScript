let posts = [
  {
    title: "post one",
    body: "this is postOne",
  },
  {
    title: "post two",
    body: "this is postTwo",
  },
];

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let error = true;
      if (!error) {
        posts.push(post);

        resolve();
      } else {
        reject("something is happened please try again");
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(() => {
    posts.forEach((post) => {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.body.appendChild(div);
    });
  }, 1000);
}

function showError(error) {
  document.body.style.background = "red";
  document.querySelector("h1").innerText = error;
}

createPost({ title: "Post Three", body: "this is post three" })
  .then(getPosts)
  .catch(showError);
