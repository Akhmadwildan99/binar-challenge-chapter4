// select element
const pBatu = document.querySelector('.batu');
const pilihan = document.querySelectorAll('.player li img');
const hasil = document.querySelector('.hasil');
const vs = document.querySelector('.vs');
const active = document.querySelectorAll('.com li img');


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

// console.log(getHasil('batu', getPilihanCom()));


pilihan.forEach((pil) => {
    pil.addEventListener('click', function() {
        const pilCom = getPilihanCom();
        const pilPlayer = pil.className;
        pil.classList.add('active-player');
        setTimeout(function() {
            pil.classList.remove('active-player');
        },2000);
        const hasilAkhir = getHasil(pilPlayer, pilCom);
    
        console.log('p:' + pilPlayer);
        console.log('c: ' + pilCom);
    
        
        active.forEach((e) => {
            if(e.className == pilCom) {
                e.classList.add('active-player');
                setTimeout(function() {
                    e.classList.remove('active-player');
                },2000);
            }
    
        });

    
        
    }); 

});












