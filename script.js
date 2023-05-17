let page = document.querySelector(".page");
let pageContent = document.querySelector(".pageContent");
let opened = false

function openPage(animNum, content){
    if(opened == true){
        return;
    }
    opened = true;
    page.style.width = "70vw";
    page.style.height = "70vh";
    page.style.opacity = 1;
    if(screen.width >= 1000){
        document.querySelector(".close").style.width = "2vw";
        document.querySelector(".close").style.height = "2vw";
    }
    else if(screen.width < 1000 && screen.width > 600){
        document.querySelector(".close").style.width = "4vw";
        document.querySelector(".close").style.height = "4vw";
    }
    else if(screen.width <= 600){
        document.querySelector(".close").style.width = "7vw";
        document.querySelector(".close").style.height = "7vw";
    }
    page.classList.add("showOpenAnim" + animNum);
    setTimeout(_=>{
        page.classList.remove("showOpenAnim" + animNum);
    }, 800)

     pageContent.innerHTML = content;
}

document.querySelector(".box1").addEventListener("click", _=>{
    let rand = Math.floor(1+Math.random()*2);
    openPage(rand, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aliquid neque laudantium illo, in, magni, ut maxime saepe temporibus repellendus velit. Id molestias eos eveniet earum perferendis facilis amet nam!`);
})
document.querySelector(".close").addEventListener("click", _=>{
    page.style.width = "0vw";
    page.style.height = "0vh";
    page.style.opacity = 0;
    document.querySelector(".close").style.width = "0vw";
    document.querySelector(".close").style.height = "0vh";
    opened = false;
    pageContent.innerHTML = "";
})