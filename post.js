function post(content, postTo) {
  var post = document.createElement("P")
  post.id = "post"
  post.innerHTML = content
  document.getElementById(postTo).appendChild(post);
}