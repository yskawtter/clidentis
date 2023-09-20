/*MENU MOBILE*/
function menuMobileFN() {
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
}
menuMobileFN()

/*TOOL TIP */
function tooltipFN() {
    const toolTips = document.querySelectorAll('[data-tooltip]')
    toolTips.forEach(item => {
        item.addEventListener('mouseover', OnMouseOver)
    })
    function OnMouseOver(e) {
        const tooltipBox = criarTooltipBox(this)
        
        onMouseMove.tooltipBox = tooltipBox
        this.addEventListener('mousemove', onMouseMove)
        onMouseLeave.tooltipBox = tooltipBox
        onMouseLeave.element = this
        this.addEventListener('mouseleave', onMouseLeave)
    }
    
    const onMouseMove = {
        handleEvent(e) {
            this.tooltipBox.style.top = `${e.pageY + 20}px`
            this.tooltipBox.style.left = `${e.pageX + 20}px`
        }
    }
    
    
    const onMouseLeave =  {
        tooltipBox: '',
        element: '',
        handleEvent() {
            this.tooltipBox.remove()
            this.element.removeEventListener('mouseleave', onMouseLeave)
            this.element.removeEventListener('mousemove', onMouseMove)
        }
    }
    
    function criarTooltipBox(el) {
        const tooltipBox = document.createElement('div')
        const text = el.getAttribute('aria-label')
        tooltipBox.classList.add('tooltip')
        tooltipBox.innerText = text
        document.body.appendChild(tooltipBox)
        return tooltipBox
    }
}
tooltipFN()

/*ANIMATED SCROLL */
function scrollAnimeFN() {
    const sections = document.querySelectorAll('.js-scroll')
    const winMidle = window.innerHeight * 0.64
    function animaScroll() {
        sections.forEach(sec => {
            const secTop = sec.getBoundingClientRect().top - winMidle
            secTop < 0 ? sec.classList.add('ativo') : secTop
        })
    }
    animaScroll()
    window.addEventListener('scroll', animaScroll)
}
scrollAnimeFN()

/*CALCULATE HORARIO */
function horarioDisp() {
    const dateNow = new Date
    const horario = document.querySelector('.horario')
    console.log(dateNow.getHours())
    if(horario) {
        if(dateNow.getHours() > 18 ) {
            horario.append(`FECHADOS`)
        } else {
            horario.append(`FUNCIONANDO`)
        }
    }
}
horarioDisp()