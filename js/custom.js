// Custom JavaScript for Corderlia Business Site


// -----------------------------------------

window.onscroll = function () { scrollFixedNavbar() };
var navbar = document.getElementById("navbar");

function scrollFixedNavbar() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.classList.add("nav-fixed-top");
  } else {
    navbar.classList.remove("nav-fixed-top");
  }
}

// -----------------------------------------

// -----------------------------------------

var year = document.getElementById('year');
year.innerHTML= new Date().getFullYear();

// -----------------------------------------

