// Making Play Rules

function getPilihanCom() {
    const com = Math.floor(Math.random() * 3) + 1;
    console.log(com);
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

console.log(getHasil('kertas', getPilihanCom()))





// function hasil() {
//     const pilCom = getPilihanCom();
//     console.log(getPilihanCom());
//     const pilPlayer = 'batu';
//     const hasilAkhir = getHasil(pilCom, pilPlayer);

//     return hasilAkhir;
// }

// console.log(hasil());




