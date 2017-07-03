/**
 * Created by cmibarnwell on 7/3/17.
 */
/* Set the width of the side navigation to 250px */
function openNav() {
    var mq = window.matchMedia( "(min-width: 500px)" );
    if(mq.matches){
        document.getElementById("leftNav").style.width = "25%";
        document.getElementById("main").style.marginLeft = "25%";
    }else{
        document.getElementById("leftNav").style.width = "40%";
        document.getElementById("main").style.marginLeft = "40%";
    }
    document.getElementById("open").style.display = 'none';
    document.getElementById("close").style.display = 'inline-block';
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("leftNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("open").style.display = 'inline-block';
    document.getElementById("close").style.display = 'none';
}