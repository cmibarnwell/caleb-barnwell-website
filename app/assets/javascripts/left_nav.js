/**
 * Created by cmibarnwell on 7/3/17.
 */
/* Set the width of the side navigation to 250px */
function openNav() {
    closeTwit();
    document.getElementById("leftNav").classList.remove("closed");
    document.getElementById("leftNav").classList.add("open");
    document.getElementsByTagName("MAIN")[0].className = "reduced";
    document.getElementsByTagName("MAIN")[0].setAttribute("onclick", "closeNav()");
    document.getElementsByTagName("FOOTER")[0].dataset.view = "reduced";
    document.getElementById("navToggle").setAttribute("onclick", "closeNav()");
    document.getElementsByTagName("NAV")[0].classList.remove("closed");
    document.getElementsByTagName("NAV")[0].classList.add("open");
    document.getElementById("navToggle").classList.remove("fa-bars");
    document.getElementById("navToggle").classList.add("fa-close");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("leftNav").classList.remove("open");
    document.getElementById("leftNav").classList.add("closed");
    document.getElementsByTagName("MAIN")[0].className = "widened";
    document.getElementsByTagName("MAIN")[0].setAttribute("onclick", "");
    document.getElementsByTagName("FOOTER")[0].dataset.view = "widened";
    document.getElementById("navToggle").setAttribute("onclick", "openNav()");
    document.getElementsByTagName("NAV")[0].classList.remove("open");
    document.getElementsByTagName("NAV")[0].classList.add("closed");
    document.getElementById("navToggle").classList.remove("fa-close");
    document.getElementById("navToggle").classList.add("fa-bars");
}