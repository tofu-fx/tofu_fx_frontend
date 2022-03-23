export default window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (currentScrollPos < 600) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
}
