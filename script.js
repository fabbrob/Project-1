
const tiles = document.querySelectorAll('.tile');
const keys = document.querySelectorAll('.letter');
const backspaceKey = document.querySelector('#backspace');

let currentTileIndex = 0;

function keyPressed(event) {

    const input = event.target.innerText;

    tiles[currentTileIndex].innerText = input;

    currentTileIndex++;
}

function backspace(event) {
    if(tiles[currentTileIndex].innerText === ''){
        tiles[currentTileIndex-1].innerText = '';
    }

    if(currentTileIndex > 0){
        currentTileIndex--;
    }
}

for(const key of keys) {
    key.addEventListener('click', keyPressed);
}

backspaceKey.addEventListener('click', backspace);