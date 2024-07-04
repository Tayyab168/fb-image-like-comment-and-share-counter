// // Selecting the necessary elements
// let likeimg = document.querySelector(".likeimg");
// let countElement = document.querySelector(".count");

// // Initializing the count
// let count = 0;

// // Adding click event listener to likeimg
// likeimg.addEventListener('click', function() {
//     // Incrementing the count
//     count++;

//     // Updating the count displayed on the page
//     countElement.textContent = count  // Update count text
// });
let count = document.querySelector(".count");
let likeimg = document.querySelector(".likeimg");
let counter = 0;

likeimg.addEventListener("click", function () {
  counter++;
  count.innerHTML = counter+"Likes"  ;
  count.style.marginRight = "240px";
  likeimg.style.color="red";  
});



let comet = document.querySelector(".comet");
let commenter = document.querySelector(".fa-comment");
let commentCounter = 0;
commenter.addEventListener("click", function () {
  commentCounter++;
  comet.innerHTML = commentCounter+" Comments"
  comet.style.marginRight="300px";
  commenter.style.color="red";  
});

let share = document.querySelector(".share");
let p_share = document.querySelector(".fa-share");
p_conter = 0;
p_share.addEventListener("click", function () {
  p_conter++;
  share.innerHTML = p_conter+"Share"  ;
  share.style.marginRight="50";
  p_share .style.color="red";  
});
