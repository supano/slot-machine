function setRing() {
    for(i = 1; i <= 30; i++) {
        let ring = document.getElementById(`ring${i}`);
        ring.style.transform = `rotateX(${((i-1)*12)}deg) translateZ(150px)`;
    }
}

setRing();

function setMove(move) {
    for(i = 1; i <= 30; i++) {
        let now = ((i-1)*12);

        if(now >= 360) {
            now = 0;
        }

        let go = now - move;


        let ring = document.getElementById(`ring${i}`);
        ring.style.transform = `rotateX(${go}deg) translateZ(150px)`;
    }
}

let a = 0;
setInterval(function() {
    setMove(a);
    a++;
}, 1);