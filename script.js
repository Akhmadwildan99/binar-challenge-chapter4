// select element
const pBatu = document.querySelector('.batu');
const pilihan = document.querySelectorAll('.player li img');
const hasil = document.querySelector('.hasil');
const active = document.querySelectorAll('.com li img');
const refresh = document.querySelector('.refresh');
const vs = document.querySelector('.vs');
const result = document.querySelector('.result');


// Making Play Rules

function getPilihanCom() {
    const com = Math.floor(Math.random() * 3) + 1;
    // console.log(com);
    if(com == 1) return 'batu';
    if(com == 2) return 'kertas';
    return 'gunting'; 
};

function getHasil(player, com) {
    if(player == com) return 'draw';
    if(player == 'batu') return (com == 'kertas') ? 'com win':'player 1 win';
    if(player == 'kertas') return (com == 'gunting') ? 'com win':'player 1 win';
    if(player == 'gunting') return (com == 'batu') ? 'com win':'player 1 win';
}



pilihan.forEach((pil) => {
    pil.addEventListener('click', function() {
        const pilCom = getPilihanCom();
        const pilPlayer = pil.className;

        pil.classList.add('active-player');
        setTimeout(function() {
            pil.classList.remove('active-player');
        },2000);

        refresh.classList.add('putar');
        setTimeout(() =>{
            refresh.classList.remove('putar');
        }, 500);

        const hasilAkhir = getHasil(pilPlayer, pilCom);

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
        } if (hasilAkhir == 'com win') {
            result.style.backgroundColor = '#4C9654';
        } else if(hasilAkhir == 'draw') {
            result.style.backgroundColor = '#035B0C';
        }
        
        result.innerHTML = hasilAkhir;

        setTimeout(() => {
            vs.classList.add('hidden');
            result.classList.remove('hidden');
        },2500);
        
    }); 

});


refresh.addEventListener('click', function() {
    location.reload();
});












