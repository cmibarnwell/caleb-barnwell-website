/**
 * Created by cmibarnwell on 7/3/17.
 */
/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementsByTagName("NAV")[0].dataset.view = "open";
    document.getElementsByTagName("MAIN")[0].dataset.view = "reduced";
    document.getElementById("navToggle").setAttribute("onclick", "closeNav()");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementsByTagName("NAV")[0].dataset.view = "closed";
    document.getElementsByTagName("MAIN")[0].dataset.view = "widened";
    document.getElementById("navToggle").setAttribute("onclick", "openNav()");
}