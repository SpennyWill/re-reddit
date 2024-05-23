document.getElementById('submit').addEventListener('click', (event) => {
  event.preventDefault(); 
  

let postAuthor = document.getElementsByClassName('name')[0].value;

let postComment = document.getElementsByClassName('comment')[0].value; 

let post =  `"${postComment}" Posted by ${postAuthor}  `; 



let comment = document.createElement('p')

document.getElementsByClassName('form-inline')[0].appendChild(comment)
  comment.innerHTML = post; 

  document.getElementsByClassName('name')[0].value = ''
  document.getElementsByClassName('comment')[0].value ='' 
}); 