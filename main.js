document.getElementById('submit').addEventListener('click', (event) => {
  event.preventDefault();

  let postAuthor = document.getElementsByClassName('p-name')[0].value;
  let postContent = document.getElementsByClassName('post')[0].value;

  let post = `"${postContent}" Posted by ${postAuthor}`;
  let entry = document.createElement('p');
  entry.setAttribute("id", randomId());
  entry.innerHTML = post;

  
  let removeButton = document.createElement('button');
  removeButton.textContent = "Remove";
  

  
  let createPost = document.getElementsByClassName('post-section')[0];
  createPost.appendChild(entry);
  entry.appendChild(removeButton);

  document.getElementsByClassName('name')[0].value = '';
  document.getElementsByClassName('comment')[0].value = '';
  removeButton.addEventListener("click", function() {
    removePost(this.parentNode.id)

  });
});




document.getElementById('comment').addEventListener('click', (event) => {
  event.preventDefault(); 
  let commentContent = document.getElementsByClassName('comment')[0].value = ''
  let commentAuthor = document.getElementsByClassName('c-name')[0].value;
  let comment = `${commentAuthor} said "${commentContent}"`;

  let nextComment = document.createElement('p')

  let createComment = document.getElementsByClassName('post-section')[0].appendChild(nextComment)
  nextComment.innerHTML = comment; 

}); 

function randomId () {
 var id = Math.floor(Math.random()*100000000) 
 return id
};

function removePost (id) {
  document.getElementById(id).remove(); 

}

//Test for github
