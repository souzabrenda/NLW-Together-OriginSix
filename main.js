
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
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
      767: { 
        slidesPerView: 2,
        setWrapperSize: true
      }
    }
  })
}


function scrollReveal() {
  const scrollReveal =  ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: false
  })
  
  scrollReveal.reveal(
    `#home .image, #home .text,
     #about .image, #about .text,
     #services header, #services .card,
     #testimonials header, #testimonials .testimonial,
     #contact .text, #contact .links
    `,{ interval: 100})
}

function activeCurrentSection () {
  if (window.innerWidth < 1200) return

  const sections = document.querySelectorAll('section[id]')
  const anchorTags = document.querySelectorAll('.menu a')

  sections.forEach(section => {
    const sectionID = section.getAttribute('id')

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return

        anchorTags.forEach(tag => {
          tag.classList.remove('active')

          anchorTags.forEach(tag => {
            
            const anchorHref = tag.getAttribute('href').split('#')[1]

            // console.log('Tag', anchorHref)
            if (anchorHref !== sectionID) return
            console.log(`Section: ${sectionID}`, `Tag: ${anchorHref}`)

            tag.classList.add('active')
          })
        })
      })
    }, { threshold: .4 })

  observer.observe(section)

  })





}

  toggleMenu()
  hideMenu()
  changeHeaderColorOnScroll()
  slideCarousel()
  scrollReveal()
  activeCurrentSection()