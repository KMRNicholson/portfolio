document.querySelector('#navbar').innerHTML = `
<div class="container">
    <ul>
        <li><a href="./aboutme.html"><span>About Me</span></a></li>
        <li><a href="./portfolio.html"><span>Portfolio</span></a></li>
        <li><a href="./blog.html"><span>Blog</span></a></li>
        <li><a href="./contact.html"><span>Contact</span></a></li>
    </ul>
</div>`

document.querySelector('#main-header').innerHTML = `<section id="showcase"></section>`

var navbar = document.getElementById("navbar");
var showcase = document.getElementById("showcase");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// When the user scrolls down 50px from the top of the document, transform header
window.onscroll = function() {headerFade()};

function headerFade() {
  if (document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20) {
    showcase.style.opacity = 0.2;
    showcase.style.minHeight = "20px";
    navbar.classList.add("sticky")
  } else {
    showcase.style.opacity = 1;
    showcase.style.minHeight = "600px"
    navbar.classList.remove("sticky");
  }
}