var count=7;
var first = document.createElement("article");
first.setAttribute("id","id1");
document.getElementsByTagName("main")[0].appendChild(first);
document.getElementById("id1").addEventListener("click",myFunction);
while(count>0) {
    myFunction();
    count--;
}
function myFunction() {
    var temp = document.createElement("article");
    temp.setAttribute("id","id2");
    temp.style.backgroundImage="none";
    var r=Math.floor(Math.random() * 256);
    var g=Math.floor(Math.random() * 256);
    var b=Math.floor(Math.random() * 256);
    temp.style.backgroundColor=rgb(r,g,b);
    temp.addEventListener("click", function(){ (this.style.backgroundImage=="none")?(this.style.backgroundImage="url('../images/white_star.png')"):(this.style.backgroundImage="none") });
    document.getElementsByTagName("main")[0].insertBefore(temp, document.getElementsByTagName("main")[0].firstChild);
}
function rgb(r, g, b){
    return "rgb("+r+","+g+","+b+")";
}

















