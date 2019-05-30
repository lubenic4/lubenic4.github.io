window.onscroll = function () {
    var navig = document.getElementById('realNav');
    var opcije = document.getElementsByClassName('opcije');
    if (window.pageYOffset > 10) {
        navig.classList.add("navigacija2");
        for (var i = 0; i < opcije.length; i++) {
            opcije[i].style.color = 'white';
        }
    } else {
        navig.classList.remove("navigacija2");
        for (var i = 0; i < opcije.length; i++) {
            opcije[i].style.color = 'black';
        }
    }
}

var brojac = 1;

function kolaps() {
    naver = document.getElementById('realNav');
    if (brojac % 2 != 0) {
        naver.classList.add('active');
        brojac++;
    } else {
        naver.classList.remove('active');
        brojac++;
    }
}