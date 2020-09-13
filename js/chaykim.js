document.addEventListener("DOMContentLoaded", function () {
    var menu = document.querySelectorAll('nav.lienket');

    function myFunction(x) {
        if (x.matches) { // If media query matches
            menu = menu[1];
        } else {
            menu = menu[0];
        }
    }

    var x = window.matchMedia("(max-width: 1023px)");
    myFunction(x); // Call listener function at run time
    //Truy xuất div menu
    var trangthai = "duoi300";
    window.addEventListener("scroll", function () {
        var x = pageYOffset;
        if (x > 300) {
            if (trangthai == "duoi300") {
                trangthai = "tren300";
                menu.classList.add('sukienscroll');
            }
        } else {
            if (trangthai == "tren300") {
                menu.classList.remove('sukienscroll');
                trangthai = "duoi300";
            }
        }

    })
})