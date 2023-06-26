var btnMenu = document.getElementById("btn");
var nav = document.getElementById("nav");
var btn = document.getElementsByClassName("btn-nav");

var btnScroll = document.getElementById("btn-scroll-top");
btnMenu.onclick = function () {
  if (nav.classList.contains("display-none")) {
    nav.classList.remove("display-none");
  } else {
    nav.classList.add("display-none");
  }
};

for (var i = 0; i < btn.length; i++) {
  btn[i].onclick = function () {
    nav.classList.add("display-none");
  };
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 3500 ||
    document.documentElement.scrollTop > 3500
  ) {
    btnScroll.style.display = "block";
  } else {
    btnScroll.style.display = "none";
  }
}

btnScroll.onclick = function () {
  console.log(123);
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
