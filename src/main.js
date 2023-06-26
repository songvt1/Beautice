var btnMenu = document.getElementById("btn");
var nav = document.getElementById("nav");
var btn = document.getElementsByClassName("btn-nav");
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
