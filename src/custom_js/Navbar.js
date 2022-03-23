export default window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  var navbar_height = document.querySelector('.NavigateBar').offsetHeight;

  if (currentScrollPos < 680) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = `-${navbar_height}px`;
  }
}
