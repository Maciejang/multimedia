//Variables
let page = document.querySelector(".page");
let pageContent = document.querySelector(".pageContent");
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
    let rand = Math.floor(1+Math.random()*2);
    openPage(rand, pageContentArray[e.target.id-1])
  }

for (let box of boxes) {
  box.addEventListener("click", boxPressed)
}

