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

function createPost(post, callBack) {
  setTimeout(() => {
    posts.push(post);
    callBack(); // * callback
  }, 2000);
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

createPost({ title: "Post Three", body: "this is post three" }, getPosts);
