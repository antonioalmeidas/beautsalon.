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

const header = document.querySelector("#header")
const navHeight =  header.offsetHeight

window.addEventListener('scroll',()=>{
  if (window.scrollY >= navHeight){
  //scroll maior que a altura do header
    header.classList.add('scroll')
  }else{
   //menor que a altura do header 
    header.classList.remove('scroll')
  }
})

