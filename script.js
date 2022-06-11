//getters for the tiles and keys in their respective arrays
const tiles = document.querySelectorAll('.tile');
const keys = document.querySelectorAll('.letter');

//getter for the backspace key
const backspaceKey = document.querySelector('#backspace');

//a variable that represents what tile is the next to be typed into
let currentTileIndex = 0;

//function that allows for the input from clicking on the keyboard letters
function keyPressed(event) {

    const input = event.target.innerText;

    tiles[currentTileIndex].innerText = input;

    currentTileIndex++;
}

//function that allows for the backspace key to work accordingly
function backspace(event) {
    if(tiles[currentTileIndex].innerText === ''){
        tiles[currentTileIndex-1].innerText = '';
    }

    if(currentTileIndex > 0){
        currentTileIndex--;
    }
}

//adds the key pressing functionality for each letter key
for(const key of keys) {
    key.addEventListener('click', keyPressed);
}

//adds the backspacing functionality for the backspace key
backspaceKey.addEventListener('click', backspace);