var tolerance = 300;

var sec1Start = document.getElementById("section1").offsetTop;
var sec2Start = document.getElementById("section2").offsetTop - tolerance;
var sec3Start = document.getElementById("section3").offsetTop - tolerance;

var opc1 = document.getElementById("opc1");
var opc2 = document.getElementById("opc2");
var opc3 = document.getElementById("opc3");

console.log("sec1 offset " + sec1Start);
console.log("sec2 offset " + sec2Start);
console.log("sec3 offset " + sec3Start);

console.log("sec1 Original offset " + section1);
console.log("sec2 Original offset " + section2);
console.log("sec3 Original offset " + section3);

var brojacSekcija2 = 0;

window.onscroll = function () {
    console.log(window.scrollY);
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
    var currentScrollY = window.scrollY;

    if (currentScrollY >= this.sec1Start && currentScrollY < this.sec2Start) {
        console.log("SECTION 1");
        if (this.opc2.classList.contains("sectionColorChange1"))
            this.opc2.classList.remove("sectionColorChange1");
        if (!this.opc2.classList.contains("sectionColorChange2") && brojacSekcija2 > 0)
            this.opc2.classList.add("sectionColorChange2");


    } else if (currentScrollY >= this.sec2Start && currentScrollY < this.sec3Start) {

        brojacSekcija2++;
        if (this.opc3.classList.contains("sectionColorChange1")) {
            this.opc3.classList.remove("sectionColorChange1");
            this.opc3.classList.add("sectionColorChange2")
        }

        if (this.opc2.classList.contains("sectionColorChange2"))
            this.opc2.classList.remove("sectionColorChange2");

        this.opc2.classList.add("sectionColorChange1");






        console.log("SECTION 2");

    } else if (currentScrollY >= this.sec3Start) {

        if (this.opc3.classList.contains("sectionColorChange2"))
            this.opc3.classList.remove("sectionColorChange2");

        if (this.opc2.classList.contains("sectionColorChange1")) {
            this.opc2.classList.remove("sectionColorChange1");
            this.opc2.classList.add("sectionColorChange2")
        }

        this.opc3.classList.add("sectionColorChange1");


        console.log("SECTION 3");
    } else console.log("WTF");


}





console.log(window.innerWidth);

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