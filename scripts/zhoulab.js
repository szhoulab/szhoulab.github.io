//alert("hello");

//const navLinks = document.querySelectorAll('.nav-item')
//const menuToggle = document.getElementById('navbarnavaltmarkup')
//const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false })
//navLinks.forEach((l) => {
//  l.addEventListener('click', () => { bsCollapse.toggle() })
//})


//const navlinks = document.queryselectorall('.nav-item')
//const menutoggle = document.getelementbyid('navbarnavaltmarkup')
//const bscollapse = new bootstrap.collapse(menutoggle)
//navlinks.foreach((l) => {
//  l.addeventlistener('click', () => { bscollapse.toggle() })
//})

//function sleep(ms) {
//  return new Promise(resolve => setTimeout(resolve, ms));
//}

//$('.navbar-nav>li>a').on('click', function () {
//    $('.navbar-collapse').collapse('hide');
//});


/*const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');


  burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');
     // animate navlinks
    navLinks.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +0.5}s`;
     }
    });
    // burger animation
    burger.classList.toggle('toggle');

    });
}

navSlide();*/


//var shiftWindow = function () { scrollBy(0, -50) };
//if (location.hash) shiftWindow();
//window.addEventListener("hashchange", shiftWindow);

//window.addEventListener("hashchange", function () { scrollBy(0, -50) })

//$("header .nav a[href!=#]").each(function () {
//    $($(this).attr("href")).css("padding-top", "40px").prev().css("margin-bottom", "-20px");
//});