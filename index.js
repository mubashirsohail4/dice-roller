const diceSrc = "./images/dice";
const diceSound = new Audio("audios/dice1.mp3");

document.querySelector("#roll-btn").addEventListener("click", () => {
    diceSound.load();
    diceSound.play();

    var i = 0;
    var intervalId = setInterval(function () {
      if (i === 8) {
        clearInterval(intervalId);
      }

    //   var img1Src = diceSrc + ((i % 6) + 1) + ".png";
    //   var img2Src = diceSrc + ((i % 6) + 1) + ".png";
    //   var img3Src = diceSrc + ((i % 6) + 1) + ".png";
    //   document.querySelector(".img1").setAttribute("src", img1Src);
    //   document.querySelector(".img2").setAttribute("src", img2Src);
    //   document.querySelector(".img3").setAttribute("src", img3Src);
    //   console.log(i);

    randomize();
      i++;
    }, 100);
});

function randomize() {
  var randomNumber1 = Math.ceil(Math.random() * 6);
  var randomNumber2 = Math.ceil(Math.random() * 6);
  var randomNumber3 = Math.ceil(Math.random() * 6);

  var img1Src = diceSrc + randomNumber1 + ".png";
  var img2Src = diceSrc + randomNumber2 + ".png";
  var img3Src = diceSrc + randomNumber3 + ".png";

  document.querySelector(".img1").setAttribute("src", img1Src);
  document.querySelector(".img2").setAttribute("src", img2Src);
  document.querySelector(".img3").setAttribute("src", img3Src);
}

document.querySelector("#select-1").addEventListener("click", () => {
  document.querySelector(".img1").style.display = "inline-block";
  document.querySelector(".img2").style.display = "none";
  document.querySelector(".img3").style.display = "none";
});

document.querySelector("#select-2").addEventListener("click", () => {
  document.querySelector(".img1").style.display = "inline-block";
  document.querySelector(".img2").style.display = "inline-block";
  document.querySelector(".img3").style.display = "none";
});

document.querySelector("#select-3").addEventListener("click", () => {
  document.querySelector(".img1").style.display = "inline-block";
  document.querySelector(".img2").style.display = "inline-block";
  document.querySelector(".img3").style.display = "inline-block";
});
