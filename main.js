function projects(){
       
    document.getElementById("projects")
    window.scrollTo(300, 700)


}
function about(){

    console.log("in about")
    document.getElementById("about")
    window.scrollTo(500, 1600)


}
function contact(){

   console.log("in contact")
    document.getElementById("contact")
    window.scrollTo(300, 2400)


}




var prevScrollpos = window.scrollY;


window.onscroll = function () {
var currentScrollPos = window.scrollY;


if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "-60px";
} else {
    document.getElementById("navbar").style.top = "0px";
}
prevScrollpos = currentScrollPos;
}

// to get the values from form




