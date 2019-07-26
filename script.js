function setRing() {
    for(let i = 1; i <= 12; i++) {
        let ring = document.getElementById(`ring${i}`);
        ring.style.transform = `rotateX(${((i-1)*30)}deg) translateZ(150px)`;
    }
}

setRing();

function setMove(move) {
    for(let i = 1; i <= 12; i++) {
        let now = ((i-1)*30);

        if(now >= 360) {
            now = 0;
        }

        let go = now - move;

        let ring = document.getElementById(`ring${i}`);
        ring.style.transform = `rotateX(${go}deg) translateZ(150px)`;
    }
}

let position = .01;
let accelerate = .05;
let destination = 180 * 7;
let winner = '';
let isSetWinner = false;
var rollingInterval = null;

document.getElementById('go').addEventListener('click', () => {
    winner = document.getElementById('winner');
    isSetWinner = false;
    rollingInterval = setInterval(rolling, 1);
});

function rolling() {
    let percentage = parseInt((position / destination) * 100);
    // console.log('position : ', position , 'accelerate : ', accelerate, 'percentage : ', percentage+'');
    setMove(position);
    // a = a +;


        if (percentage <= 50) {
            position = position + accelerate;
            accelerate = accelerate + 0.001;
        } else if (percentage < 99) {
            position = position + accelerate;
            accelerate = accelerate - 0.001;
        } else {
            if(accelerate > 0.003) {
                position = position + accelerate;
                accelerate = accelerate - 0.003;
            }
        }

        if(percentage == 50 && isSetWinner != true) {
            console.log('set winner :', winner.value);
            setWinner(winner.value)
            isSetWinner = true;
        }

    if(position >= destination) {
        clearInterval(rollingInterval);
        position = 0;
        console.log('clear interval')
    }
}

function setWinner(winnerName) {
    document.getElementById(`ring7`).innerText = winnerName;
}
