
function yes(){
    alert("yes.you are right")
}
document.getElementById("noButton").addEventListener("mouseover", noHover);

function noHover() {
    var x =  Math.floor(Math.random() * window.innerWidth);
    var y =  Math.floor(Math.random() * window.innerHeight);
    document.getElementById("noButton").addEventListener("mouseover", noHover);
    document.getElementById("noButton").style.left = x +"px";
    document.getElementById("noButton").style.top = y + "px";
}
