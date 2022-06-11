/*

NEXT GOAL:

refactor code so that the current tile is found via a class name rather than a saved index in the array

*/


//  VARIABLES   //

//getters for the tiles and keys in their respective arrays
const tiles = document.querySelectorAll(".tile");
const keys = document.querySelectorAll(".letter");

//getter for the backspace key
const backspaceKey = document.querySelector("#backspace");
const enterKey = document.querySelector("#enter");

//a variable that represents what tile is the next to be typed into
let currentTileIndex = 0;

// FUNCTIONS BELOW //

//function that allows for the input from clicking on the keyboard letters
function keyPressed(event) {
  if (currentTileIndex % 5 !== 0 || currentTileIndex === 0) { //prevents the user from going into a new row
    const input = event.target.innerText;

    tiles[currentTileIndex].innerText = input;

    currentTileIndex++;
  }
}

//function that allows for the backspace key to work accordingly
function backspace() {
  if (tiles[currentTileIndex].innerText === "" && currentTileIndex !== 0) {
    tiles[currentTileIndex - 1].innerText = "";
  }

  if (currentTileIndex > 0) {
    currentTileIndex--;
  }
}

function enter() {
}


//IMMEDIATE CODE BELOW//

//adds the key pressing functionality for each letter key
for (const key of keys) {
  key.addEventListener("click", keyPressed);
}

//adds the backspacing functionality for the backspace key
backspaceKey.addEventListener("click", backspace);
