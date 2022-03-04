const btnEl = document.querySelector(".roll-dice");
const imgDice1 = document.querySelector(".dice-1");
const imgDice2 = document.querySelector("#dice-2");


const arrImages = [
  "./images/1.png",
  "./images/2.png",
  "./images/3.png",
  "./images/4.png",
  "./images/5.png",
  "./images/6.png"
]

function randomDiceIndex(){
  return Math.floor(Math.random() * 6 )
}

function handleClickRollDice(){
  const idx1 = randomDiceIndex()
  const idx2 = randomDiceIndex()
  // console.log(idx1, idx2);
  const src1 = arrImages[idx1]
  const src2 = arrImages[idx2]

  imgDice1.src = src1
  imgDice2.src = src2
}





document.addEventListener("click", handleClickRollDice);
