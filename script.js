const wrapper = document.getElementById("wrapper");


let score = 0;
let time = 30;
let clickedSquare;
let rando;
var selectedDifficulty;
var interval;
let btnArr = [];


wrapper.innerHTML += `<div id="scoreboard"><h1>Score: ${score}</h1></div>`
wrapper.innerHTML += `<div id="timer"><h1>Time Left: ${time}<h1></div>`

for (i = 0; i < 9; i++) {
    btnArr[i] = ("btn" + i);
    wrapper.innerHTML += 
    `
    <button type="button" class="square" id="${btnArr[i]}" onClick="fetchID(this.id)"></button>
    `
}

wrapper.innerHTML += `<div id="startGame"><button type="button" id="gameBtn">START GAME</button></div>`
wrapper.innerHTML += 
`
<div class="difficulties"><label for="difficulty">Select Difficulty</label>

<select id="difficulty">
  <option value="easy">Easy</option>
  <option value="medium">Medium</option>
  <option value="hard">Hard</option>
</select> </div>
`

const scoreboard = document.getElementById("scoreboard");
const timer = document.getElementById("timer");
const difficulty = document.getElementById("difficulty")

const startGame = document.getElementById("startGame");


const gameStarter = () => {
    selectedDifficulty = difficulty.options[difficulty.selectedIndex].text;
    if (selectedDifficulty == "Easy") {
        interval = 1800;
    } else if (selectedDifficulty == "Medium") {
        interval = 1200;
    } else if (selectedDifficulty == "Hard") {
        interval = 700;
    }
    if (time == 30) {
        countDown();
        setInterval(molePopper, interval)
    }
}

startGame.addEventListener("click", gameStarter);

function countDown () {
    time--;
    timer.innerHTML = `<div id="timer"><h1>Time Left: ${time}<h1></div>`
    if (time > 0) {
        setTimeout(countDown, 1000)
    }
    if (time == 0) {
        alert(`Game Over! Your Final Score Is ${score}`)
        location.reload();
    }
}


let fetchID = (div_id) => clickedSquare = btnArr.indexOf(div_id);

let molePopper = () => {
    rando = Math.floor(Math.random() * (9 - 0)) + 0;
    document.getElementById(btnArr[rando]).style.backgroundSize = "100%";
    document.getElementById(btnArr[rando]).style.backgroundImage = "url(mole.png)";
    setTimeout(function () {
        if (rando == clickedSquare) {
            score += 1;
            scoreboard.innerHTML = `<div id="scoreboard"><h1>Score: ${score}</h1></div>`;
            clickedSquare = null;
        } else {
            clickedSquare = null;
        }
        document.getElementById(btnArr[rando]).style.backgroundSize = "none";
        document.getElementById(btnArr[rando]).style.backgroundImage = "none"
    }, interval / 2)

    }
        
    


