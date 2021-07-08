// select element
const navigasi = document.querySelector('.navigasi');
const pBatu = document.querySelector('.batu');
const pilihan = document.querySelectorAll('.player li img');
const hasil = document.querySelector('.hasil');
const active = document.querySelectorAll('.com li img');
const refresh = document.querySelector('.refresh');
const vs = document.querySelector('.vs');
const result = document.querySelector('.result');
const scoreP1 = document.querySelector('.score_P1');
const timer = document.querySelector('.time');


// Making Play Rules

class Game{
    constructor(elementSatu, elementDua, elementTiga, menang, kalah, seri ){
        this.elementSatu = elementSatu;
        this.elementDua = elementDua;
        this.elementTiga = elementTiga;
        this.menang = menang;
        this.kalah = kalah;
        this.seri = seri;

    }

    getPilihanCom() {
        const com = Math.floor(Math.random() * 3) + 1;
        console.log(com);
        if(com == 1) return this.elementSatu;
        if(com == 2) return this.elementDua;
        return this.elementTiga;
    }

    getResult(player, com ) {
        if(player == com) return this.seri;
        if(player == this.elementSatu) return (com == this.elementDua) ? this.kalah : this.menang;
        if(player == this.elementDua) return (com == this.elementTiga) ? this.kalah : this.menang;
        if(player == this.elementTiga) return (com == this.elementSatu) ? this.kalah : this.menang;
    
    }
}

const play = new Game('batu', 'kertas', 'gunting', 'player 1 win', 'com win', 'draw');

// set timer function
let hours = 0;
let minutes = 0;
let seconds = 0;
let displayHours = 0;
let displayMinutes = 0;
let displaySeconds = 0;

function timerGame(){
    seconds += 1;

    if(seconds / 60 == 1) {
        seconds = 0;
        minutes += 1;
        if(minutes / 60 == 1) {
            minutes = 0;
            hours += 1;
        }
    };

    if(seconds < 10) {
        displaySeconds = "0" + seconds.toString();
    } else {
        displaySeconds = seconds;
    };

    if(minutes < 10) {
        displayMinutes = "0" + minutes.toString();
    } else {
        displayMinutes = minutes;
    };

    if(hours < 10) {
        displayHours = "0" + hours.toString();
    } else {
        displayHours = hours;
    };

    timer.innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
};

let currentScore = 0;

pilihan.forEach((pil) => {
    pil.addEventListener('click', function() {
        const pilCom = play.getPilihanCom();
        const pilPlayer = pil.className;

        pil.classList.add('active-player');
        setTimeout(function() {
            pil.classList.remove('active-player');
        },2000);

        refresh.classList.add('putar');
        setTimeout(() =>{
            refresh.classList.remove('putar');
        }, 500);

        const hasilAkhir = play.getResult(pilPlayer, pilCom);

        active.forEach((e) => {
            if(e.className == pilCom) {
                e.classList.add('active-player');
                setTimeout(function() {
                    e.classList.remove('active-player');
                },2000);
            }
        });

        if(hasilAkhir == 'player 1 win') {
            result.style.backgroundColor = '#4C9654';
            currentScore += 1;
            scoreP1.textContent = currentScore;
        } if (hasilAkhir == 'com win') {
            result.style.backgroundColor = '#4C9654';
            currentScore -= 1;
            scoreP1.textContent = currentScore;
        } else if(hasilAkhir == 'draw') {
            result.style.backgroundColor = '#035B0C';
        }
        
        result.innerHTML = hasilAkhir;

        setTimeout(() => {
            vs.classList.add('hidden');
            result.classList.remove('hidden');
        },1500);
        
    }); 

});


window.setInterval(() => {
    timerGame();
}, 1000);

refresh.addEventListener('click', function() {
    refresh.classList.add('putar');
        setTimeout(() =>{
            refresh.classList.remove('putar');
        }, 500);
    setTimeout(() =>{
        location.reload(); 
    },500);
});













