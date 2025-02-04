var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
  document.getElementById("nav1").style.top = "0";
} 
else {
  document.getElementById("nav1").style.top = "-18vh";
  document.getElementById("nav1").style.transition = "top 0.3s";
}
prevScrollpos = currentScrollPos;
if(document.body.scrollTop > 155 || document.documentElement.scrollTop > 155){
  document.getElementById("nav1").style.backgroundColor="rgba(27, 38, 59, 0.862)";
}
else{
  document.getElementById("nav1").style.top = "0";
  document.getElementById("nav1").style.backgroundColor="transparent";
  document.getElementById("nav1").style.transition="background-color 1s"
}
}
document.getElementById("scrollToTop").addEventListener("click", function (event) {
  event.preventDefault(); // Mencegah perilaku default tautan
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Scroll dengan animasi halus
  });
});