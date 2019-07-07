window.onscroll = function () {
    var navig = document.getElementById('realNav');
    var opcije = document.getElementsByClassName('opcije');
    var x = window.matchMedia("(min-width:750px)");
    if (window.pageYOffset > 10) {
        if (x.matches) {
            navig.classList.add("navigacija2");

        }
    } else {
        navig.classList.remove("navigacija2");

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
        brojac--;
    }
}