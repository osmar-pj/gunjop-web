/**-------------------------------------------------------------------------------- */
/**-------------------------------------------LOADER------------------------------- */
/**-------------------------------------------------------------------------------- */
window.onload = function () {
  var loader  = document.getElementById('loader');
  var body = document.getElementById('body');

  setTimeout(function () {
    loader.style.visibility='hidden';
    loader.style.opacity='0';
  }, 2500);

  body.style.overflow='auto';
}

/**-------------------------------------------------------------------------------- */
/**---------------------------------MENU DESPLEGABLE------------------------------- */
/**-------------------------------------------------------------------------------- */

const menu        = document.getElementById('menu-mobile');
const openmenu    = document.getElementById('open-menu');
const cerrarmenu  = document.getElementById('close-menu');

openmenu.addEventListener('click', () => {
  menu.style.animation = 'entrada 0.6s ease forwards';
});

cerrarmenu.addEventListener('click', () => {
  menu.style.animation = 'salida 0.6s ease forwards';
});

/**-------------------------------------------------------------------------------- */
/**------------------------------ CARRUSEL HOME ----------------------------------- */
/**-------------------------------------------------------------------------------- */

let slideIndex = 1;
showSlides(slideIndex)

function plusSlides(n){
    showSlides(slideIndex += n)
}

function showSlides(n){
    let i;
    let slides = document.querySelectorAll(".mySlides");
    if(n > slides.length) slideIndex = 1
    if(n < 1) slideIndex = slides.length
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    slides[slideIndex-1].style.animation = "abajo 2s ease-in-out";
}

setInterval(function() {
  plusSlides(1);
}, 12000);

/**-------------------------------------------------------------------------------- */
/**------------------------------ CARRUSEL CUSTOMERS ------------------------------ */
/**-------------------------------------------------------------------------------- */

let slideIndex2 = 1;
showSlides2(slideIndex2)

function plusSlides2(n){
    showSlides2(slideIndex2 += n)
}

function showSlides2(n){
    let i;
    let slides2 = document.querySelectorAll(".carrusel-item");
    if(n > slides2.length) slideIndex2 = 1
    if(n < 1) slideIndex2 = slides2.length
    for(i = 0; i < slides2.length; i++){
        slides2[i].style.display = "none";
    }
    slides2[slideIndex2-1].style.display = "block";
}

setInterval(function() {
  plusSlides2(1);
}, 5000);

/**-------------------------------------------------------------------------------- */
/**-------------------------------SCROLLLL ATUMATICO------------------------------- */
/**-------------------------------------------------------------------------------- */

window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    }
  }
}

