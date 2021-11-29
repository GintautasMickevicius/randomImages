const showButton = document.getElementById("showBtn");
const randomizeButton= document.getElementById('randomizeBtn');
const images = document.getElementById("images");
const show = document.getElementById("rodyti");
const imgArray = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg','8.jpg'];
const maisytiImg = document.getElementById("randomizeBtn");


 // show, hide mygtukas
showButton.addEventListener("click", rodyti);
function rodyti() {
  if (show.style.display === "block") {
    show.style.display = "none";
    document.getElementById("showBtn").innerText = "Show images";
  } else {
    show.style.display = "block";
    document.getElementById("showBtn").innerText = "Hide images";
  }
}
// randomize mygtukas
maisytiImg.addEventListener('click', maisyti);
function maisyti(){
    images.innerText = " "
    imgArray.sort(function(){ return - Math.random() * 8 + 1});
    for (let i = 0; i < imgArray.length; i++) {
    images.innerHTML += `<img src="${imgArray[i]}">`;
    }
}
