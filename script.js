//Variables
let page = document.querySelector(".page");
let pageContent = document.querySelector(".pageContent");
let box = document.querySelectorAll(".box");
let opened = false
let pageContentArray = [`lorem ipsum1`, `lorem ipsum2`, `lorem ipsum3`, `lorem ipsum4`, `lorem ipsum5`, `lorem ipsum6`];

//page functionality
function openPage(animNum, content){
    if(opened == true){
        return;
    }
    
    opened = true;
    page.style.visibility = "visible";

    page.classList.add("showOpenAnim" + animNum);
    setTimeout(_=>{
        page.classList.remove("showOpenAnim" + animNum);
    }, 800)

     pageContent.innerHTML = content;
}
//page close button
document.querySelector(".close").addEventListener("click", _=>{
    page.style.visibility = "hidden";
    opened = false;
    pageContent.innerHTML = "";
})

//page boxes listeners

const boxes = document.querySelectorAll(".mainBox");

const boxPressed = e => {
  let rand = Math.floor(1 + Math.random() * 2);
  let boxId = parseInt(e.target.id);
  
  console.log(boxId);
  if (!isNaN(boxId)) {
    let rand = Math.floor(1 + Math.random() * 2);
    openPage(rand, pageContentArray[boxId - 1]);
  }
  }

for (let box of boxes) {
  box.addEventListener("click", boxPressed)
}


//mouse

// document.addEventListener('mousemove', handleMouseMove);


// let mouseX;
// let mouseY;

// function handleMouseMove(event) {
//   const mX = event.pageX;
//   const mY = event.pageY;
//   mouseX = mX;
//   mouseY = mY;

// }

// function calcAngleDegrees(x, y) {
//   return Math.atan2(y, x) * 180 / Math.PI;
// }

// box[0].addEventListener("mouseover", _=>{
//   console.log(calcAngleDegrees(box[0].getBoundingClientRect().left, mouseY))
// });