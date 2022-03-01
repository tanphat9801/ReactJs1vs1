let images1 = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"];

let images2 = ["2.png", "4.png", "3.png", "5.png", "6.png", "1.png"];

randomImages = () => {
  let random1 = Math.floor(Math.random() * images1.length);
  let random2 = Math.floor(Math.random() * images2.length);

  let selectimage1 = images1[random1];
  let selectimage2 = images2[random2];

  document.querySelector(".dice-1").src = `./images/${selectimage1}`;
  document.querySelector("#dice-2").src = `./images/${selectimage2}`;
};
