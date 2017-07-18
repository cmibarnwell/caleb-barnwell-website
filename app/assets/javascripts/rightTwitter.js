/**
 * Created by cmibarnwell on 7/18/17.
 */
function openTwit() {
    document.getElementsByTagName("NAV")[0].classList.remove("closedTwit");
    document.getElementsByTagName("NAV")[0].classList.add("openTwit");
    document.getElementById("twitterToggle").setAttribute("onclick", "closeTwit()");
    //document.getElementsByTagName("MAIN")[0].classList.add("reducedTwit");
    //document.getElementsByTagName("MAIN")[0].classList.remove("widenedTwit");
    document.getElementsByTagName("MAIN")[0].className = "reducedTwit"
}

function closeTwit() {
    document.getElementsByTagName("NAV")[0].classList.remove("openTwit");
    document.getElementsByTagName("NAV")[0].classList.add("closedTwit");
    document.getElementById("twitterToggle").setAttribute("onclick", "openTwit()");
    document.getElementsByTagName("MAIN")[0].classList.remove("reducedTwit");
    document.getElementsByTagName("MAIN")[0].classList.add("widenedTwit");
}