/*MENU MOBILE*/
const menuH = document.querySelector('.menu-hamburguer')
const nav = document.querySelector('.nav')
const overlay = document.querySelector('.closeOverlay')

menuH.addEventListener('click', () => {
    nav.classList.toggle('active')
    overlay.classList.remove('closeOverlay')
    overlay.classList.toggle('overlay')
})
overlay.addEventListener('click', function(e) {
    const target = e.target
    if(target.className === 'overlay') {
        nav.classList.toggle('active')
        overlay.classList.toggle('overlay')
    }
})