const container = document.querySelector(".container")

let score = 0;
let time = 30;
let clickedSquare;
let randomInt;
let selectedDifficulty;
let interval;
let btnArr = [];

container.innerHTML += `<div class="scoreboard><h1>Score: ${score}</h1></div>`
container.innerHTML += `<div class="timer"><h1>Time Left: ${time}</h1></div>`
for (i = 0; i < 9; i++) {
    btnArr[i] = "btn" + i;

    container.innerHTML += 
    `
    <button type="button" class="square" id="${btnArr[i]}" onClick="fetchID(this.id)"></button>
    `
}

container.innerHTML += `<div class="gameBtn"><button type ="button">START GAME</button></div>`

container.innerHTML +=
`
<selection class="difficulties">
    <option value="easy">Easy</option>
    <option value="medium">Medium</option>
    <option value="hard">Hard</option>
`