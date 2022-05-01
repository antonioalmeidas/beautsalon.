const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}


const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}

// mudar o header da pagina quando der scroll


function changeHeaderWhenScroll(argument) {

const header = document.querySelector("#header")
const navHeight =  header.offsetHeight


  if (window.scrollY >= navHeight){
  //scroll maior que a altura do header
    header.classList.add('scroll')
  } else{
   //menor que a altura do header
    header.classList.remove('scroll')
  }

}


// back to top button
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

  if(window.scrollY >= 1000){
    backToTopButton.classList.add('show')
  }else{
    backToTopButton.classList.remove('show')
  }

}

//calling the functions when scroll
window.addEventListener('scroll',()=>{
  changeHeaderWhenScroll()
  backToTop()
  })




// slider testimonials

const swiper = new Swiper('.swiper-container',{
  slidesPerView:1,
  pagination:{
    el:'.swiper-pagination'
  },
  mousewheel:true,
  keyboard:true
})



// ScrollReveal

const scrollReveal = ScrollReveal({
  origin:'top',
  distance:'30px',
  duration:700,
  reset:true
})

scrollReveal.reveal(
 ` #home .image, #home .text,
 #about .image, #about .text,
 #services header, #services .card,
 #testimonials header, #testimonials .testimonials
 #contact .text, #contact .links,
 footer .brand, footer .social
 `,
 {interval:100}
) 

