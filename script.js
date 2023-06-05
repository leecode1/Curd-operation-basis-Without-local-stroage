/** @format */

let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(input.value);
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post cannot br balank";
  } else {
    msg.innerHTML = "";
    acceptData();
  }
};

//  Storing the data
let data = {};

let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();
};

// For seeing the data
let createPost = () => {
  posts.innerHTML += `<div>
                        <p>${data.text}</p>
                        <class="options">
                            <i onClick='editPost(this)' class="fas fa-edit"></i>
                            <i onClick='deletePost(this)'  class="fas fa-trash-alt"></i>
                        </span>
                    </div>`; // To make old data  store we use +
  input.value = "";
};

// Deleting
let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

// editing

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
};
