// Generating a random image for player 1
// Getting a random number from 1 - 6

function diceGame() {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;

  // Generating a random dice image with its extension
  let randomDiceImage = "dice" + randomNumber1 + ".png";

  // linking the generated image source to the image folder
  let randomImageSource = "Images/" + randomDiceImage;
  let image1 = document
    .querySelectorAll("img")[0]
    .setAttribute("src", randomImageSource);

  // Generating random image for player 2
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  let randomImageSource2 = "Images/dice" + randomNumber2 + ".png";
  let image2 = document
    .querySelectorAll("img")[1]
    .setAttribute("src", randomImageSource2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h2").innerHTML = "Player1 Wins";
    // document.querySelector("h3").style.color = "#5FD068";
    // document.querySelector("h3").style.textAlign = "center";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h2").innerHTML = "Player2 Wins";
  } else {
    document.querySelector("h2").innerHTML = "It is a draw, No winner";
  }
  let total = randomNumber1 + randomNumber2;
  document.querySelector("#total").innerHTML = `Total: ${total}`;
}

document.querySelector("button").addEventListener("click", diceGame);
