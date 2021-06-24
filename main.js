
function toggleMenu() {
  const nav = document.querySelector('#header nav')
  const toggle = document.querySelectorAll('nav .toggle')
  
  for (const element of toggle) {
    element.addEventListener('click', function() { 
      nav.classList.toggle('show')
    })
  }
}


function hideMenu() {
  const nav = document.querySelector('#header nav')
  const links = document.querySelectorAll('nav ul li a')
  
  for (const link of links) {
    link.addEventListener('click', function() {
      nav.classList.remove('show')
    })
  }
}
  

function changeHeaderColorOnScroll() {
  const header = document.querySelector("#header")
  const navHeight = header.offsetHeight
  
  window.addEventListener('scroll', function(){
    if(window.scrollY >= navHeight) { 
      header.classList.add('scroll')
    } else 
    { header.classList.remove('scroll')}
  })
}
  
  
function slideCarousel() {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
      elemento:'.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true
  })
}


function scrollReveal() {
  const scrollReveal =  ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 750,
    reset: true
  })
  
  scrollReveal.reveal(
    `#home .image, #home .text,
     #about .image, #about .text,
     #services header, #services .card,
     #testimonials header, #testimonials .testimonial,
     #contact .text, #contact .links
    `,{ interval: 100})
}





  toggleMenu()
  hideMenu()
  changeHeaderColorOnScroll()
  slideCarousel()
  scrollReveal()