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

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("showcase").style.opacity = 0.2;
    document.getElementById("showcase").style.minHeight = "200px"
  } else {
    document.getElementById("showcase").style.opacity = 1;
    document.getElementById("showcase").style.minHeight = "600px"
  }
}