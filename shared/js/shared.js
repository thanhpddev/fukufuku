/*!
 * ScriptName: shared.js
 *
 * FoodConnection
 * http://foodconnection.jp/
 * http://foodconnection.vn/
 *
 */

$(document).ready(function() {
    $('body').removeClass('navOpen');
    $(".hamburger").click(function() {
        if ($('body').hasClass('navOpen')) {
            $('body').addClass('navClose');
            $('body').removeClass('navOpen');


        } else {
            $('body').addClass('navOpen');
            $('body').removeClass('navClose');



        }
    });

    $(".close_btn,#menu_toggle a").click(function() {
        $('body').removeClass('navOpen');
        $('body').addClass('navClose');


    });
});

$(document).ready(function() {

    $(".close_btn, #menu_toggle a").click(function() {
        $('body').removeClass('nav--opened');
        $('.hamburger').removeClass('is-active');
    });
});







// BEGIN: fix scroll iOS
var overflowIsHidden = function(node) {
    var style = getComputedStyle(node);
    return style.overflow === "hidden" || style.overflowX === "hidden" || style.overflowY === "hidden";
}

var isItScrollableWithoutVisibleScrollbars = function(el) {
    if (el === null) return false;

    var isScrollable = false,
        hasScrollbars = false;

    isScrollable = el.scrollHeight > el.offsetHeight ? true : false; // first, lets find out if it has scrollable content
    // isScrollable = el.scrollHeight + 1 > el.clientHeight ? true : false; // first, lets find out if it has scrollable content

    if (isScrollable) hasScrollbars = (el.offsetWidth > el.scrollWidth) ? true : false; // if it's scrollable, let's see if it likely has scrollbars
    // if (isScrollable) hasScrollbars = (el.offsetWidth > el.scrollWidth - 1) ? true : false; // if it's scrollable, let's see if it likely has scrollbars

    if (isScrollable && !hasScrollbars && !overflowIsHidden(el)) return true;
    else return false;
};

document.addEventListener("touchmove", function(e) {
    if (document.body.classList.contains("nav--opened")) {
        if ($(e.target).parents("#menu_toggle").length < 1) e.preventDefault();
        else if (!isItScrollableWithoutVisibleScrollbars(document.getElementById("menu_toggle"))) e.preventDefault();
    }
}, {
    passive: false
});

window.addEventListener("resize", function() {
    var _event_ = new Event("touchmove");

    document.dispatchEvent(_event_); // trigger
}, {
    passive: false
});
// END: fix scroll iOS