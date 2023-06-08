//Variables
let page = document.querySelector(".page");
let pageContent = document.querySelector(".pageContent");
let box = document.querySelectorAll(".box");
let backgroundAudio = document.querySelector(".bgMusic");
let volumeSlider = document.querySelector(".volumeBar");
let opened = false
let pageContentArray = [
`Cafe frappe, czyli kawa mrożona (zwana również kawą grecką). W przeciwieństwie do  poprzednich przepisów na kawy na bazie espresso, tutaj wystarczy nam kawa rozpuszczalna, chociaż lepszego kopa da normalna. Kawa bardzo popularna w letnie upały, często podawana z lodami, śmietaną, bądź po prostu z dolanym zimnym mlekiem i kostkami lodu.`, 
`Caffe Latte Wyjątkowo mleczna i łagodna kawa podawana w wysokich szklankach podbiła nie tylko włoskie serca, ale zyskała popularność wśród ludzi na całym świecie. Jest to podstawa i zazwyczaj pija się ją nie by się pobudzić, ale aby wypić do deseru itp. Bardzo dobrze komponuje się z wszelkimi syropami itp.`, 
`Espresso Czyli idealny sposób na szybkie pobudzenie! Espresso to napar, który przygotowywany jest z drobno zmielonych ziaren kawy w specjalnym ekspresie. Nazwa najpewniej wywodzi się od włoskiego przymiotnika „espressivo”, co znaczy „wyrazisty”. I to właśnie doskonale określa charakter tej kawy – wyrazisty smak, zapach i barwa! Typowo włoskie espresso parzy się najczęściej z mieszanki różnych gatunków kaw. Na powierzchni doskonale zaparzonej kawy unosi się gęsta orzechowo-brązowa pianka – „crema”.`, 
`Flat white to kawa z dodatkiem mleka, ale jej przygotowanie odbiega od tego, co przychodzi nam do głowy. Flat White przyrządza się nieco inaczej niż zwyczajne wlanie mleka. Podwójne espresso zalewa się gorącym, tylko lekko spienionym mlekiem (najlepiej pełnotłustym!). W przeciwieństwie do Caffe Latte tutaj pianki jest mniej przez co jest „flat”, czyli z angielskiego płaska.`, 
` Mocha Kawa stworzona wręcz dla miłośników połączenia kawy i czekolady. Jest to połączenie czarnej mocnej kawy i czekolady, nie ma w regule jaką czekoladę podawać. Można mleczną, białą, albo jak oryginalnie gorzką. Najlepszy efekt jest z czekoladą rozpuszczoną wcześniej w kąpieli wodnej.`, 
`Cappuccino to dobrze znany wszystkim włoski napój kawowy, którego głównymi składnikami są espresso oraz spienione mleko. Ta pyszna pianka oprószona jest często w kawiarniach itp. kakao lub sypką czekoladą. Sekretem idealnego cappuccino jest odpowiednio spienione mleko, które sprawia, że pianka jest kremowa i pozbawiona widocznych pęcherzyków powietrza. Ciekawostka! Włoskie standardy jasno określają grubość pianki – powinna wynosić od 1 do 2 centymetrów. `];

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

function changeBGvolume(volumeValue){
  backgroundAudio.volume = volumeValue/100
}

changeBGvolume(volumeSlider.value);
volumeSlider.addEventListener("change", _=>{
   changeBGvolume(volumeSlider.value)
   backgroundAudio.play();
})
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