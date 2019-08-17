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

console.log(window.innerWidth)

var brojac = 1;

function kolaps() {

    naver = document.getElementById('realNav');
    if (!naver.classList.contains('active')) {
        naver.classList.add('active');
    } else {
        naver.classList.remove('active');
    }
}

function dragBackNav() {
    if (window.innerWidth < 750) {
        naver = document.getElementById("realNav")
        naver.classList.remove('active')
    }
}


function prebaci(oznaka) {
    var dio = document.getElementById(oznaka);
    window.scrollTo({
        top: dio.offsetTop - 48,
        bottom: 0,
        behavior: 'smooth'
    });
}