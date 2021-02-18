window.addEventListener("scroll", function(){
 var navscroll=document.getElementById("nav");
 navscroll.classList.toggle("fixed", window.scrollY > 10);
});
function navBlack(){
var nav=document.getElementById('nav').classList.toggle("change");
}

