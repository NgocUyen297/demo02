//// banner /////
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("myslide");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

/// thanh NAV ////

document.addEventListener("DOMContentLoaded", function () {
    var menu = document.querySelectorAll('nav.lienket');
    menu = menu[0];
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

/* ..............................................
  Back to top
............................................... */
$(document).ready(function () {
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 100) {
            $("#go-to-top").fadeIn();
        } else {
            $("#go-to-top").fadeOut();
        }
    });
    $("#go-to-top").click(function () {
        $("html, body").animate({
                scrollTop: 0,
            },
            2000
        );
        return false;
    });
});