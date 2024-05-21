let surprisesClicked = [false, false, false, false, false];

document.getElementById('clickable-text').onclick = function() {
    document.querySelector('.main-page').style.display = 'none';
    document.getElementById('buttons-page').style.display = 'flex';
};

function openSurprise(num) {
    const texts = [
        "ZG Memesi Çok Güzel",
        "ZG Saçların Çok Güzel",
        "ZG Yüzün Çok Güzel",
        "ZG Popon Çok Güzel",
        "ZG Dudakların Çok Güzel"
    ];
    document.getElementById('buttons-page').style.display = 'none';
    document.getElementById('surprise-text').innerText = texts[num - 1];
    document.getElementById('surprise-page').style.display = 'flex';
    surprisesClicked[num - 1] = true;
    checkAllSurprises();
}

function goBack() {
    document.getElementById('surprise-page').style.display = 'none';
    document.getElementById('buttons-page').style.display = 'flex';
}

function restart() {
    surprisesClicked = [false, false, false, false, false];
    document.querySelector('.main-page').style.display = 'flex';
    document.getElementById('congrats-page').style.display = 'none';
}

function checkAllSurprises() {
    if (surprisesClicked.every(Boolean)) {
        document.getElementById('surprise-page').style.display = 'none';
        document.getElementById('congrats-page').style.display = 'flex';
    }
}