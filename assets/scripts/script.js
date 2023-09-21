/*MENU MOBILE*/
function menuMobileFN() {
    const menuH = document.querySelector('.menu-hamburguer')
const nav = document.querySelector('.nav')
const overlay = document.querySelector('.closeOverlay')

menuH.addEventListener('click', () => {
    nav.classList.toggle('active')
    overlay.classList.remove('closeOverlay')
    overlay.classList.remove('displayModalHidden')
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
            const secVisible = (secTop - winMidle) < 0
            if(secVisible) {
                sec.classList.add('ativo')
            } else if (sec.classList.contains('ativo')) {
                sec.classList.remove('ativo')
            }
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
    if(horario) {
        if(dateNow.getHours() > 18 ) {
            horario.append(`FECHADOS`)
        } else {
            horario.append(`FUNCIONANDO`)
        }
    }
}
horarioDisp()

/* FAQ ANSWER */
function FaqFN() {
    const FAQs = document.querySelectorAll('.faq-c')
    FAQs.forEach(faq => faq.addEventListener('click', () => faq.childNodes[3].classList.toggle('answer')))
}
FaqFN()

/* ANIMAR NUMEROS DINAMICAMENTE */
function animaNumerosFN() {
    const obsvTarget = document.querySelector('.vantagens-numb')
    if(obsvTarget) {
        function anNum()  {
                const numbGen = document.querySelectorAll('.numbGen')
                numbGen.forEach(num => {
                    const total = +num.innerText
                    const incremento = total < 16 ? Math.floor(total / 4) : Math.floor(total / 90)
                    let start = 0
                    const timer = setInterval(() => {
                        start += incremento
                        num.innerText = start
                        if(start > total) {
                            num.innerText = total
                            clearInterval(timer)
                        }
                    }, 64 * Math.random())
                })
        }


        function handleMutatin(mutation) {
            if(mutation[0].target.classList.contains('ativo')) {
                obsv.disconnect()
                anNum()
            }
        }
        const obsv = new MutationObserver(handleMutatin)
        obsv.observe(obsvTarget, {attributes: true})
}
}
animaNumerosFN()

function verifyEmptFields() {
    const agendeContainer = document.querySelector('.agende-container')

    if(agendeContainer) {

    const nomeInput = document.querySelector('#nomeInput')
    const emailInput = document.querySelector('#emailInput')
    const telefoneInput = document.querySelector('#telefoneInput')
    const btnSS = document.querySelector('.btnSendSchedules')
    const avisoError = document.querySelector('.avisoError')
    const p = document.createElement('p')

    const modal = document.querySelector('.modal')
    const overlay = document.querySelector('.displayModalHidden')
    const nav = document.querySelector('.nav')
    
    const modalContainerText = document.querySelector('.modal-container h3')

    btnSS.addEventListener('click', (e) => {
        e.preventDefault()
        if(nomeInput.value === '') {
            elementsError('*Por favor, preencha o campo nome')
            return
        } else if(emailInput.value === '' && telefoneInput.value === '') {
            elementsError('*Por favor, preencha o campo Email ou Telefone')
            return
        }
        modalContainerText.innerText = `Ficamos felizes por confiar em nosso trabalho, ${nomeInput.value} :) em breve entraremos em contato com você via ${emailInput.value !== '' ? `email` : `telefone`}. `
        
        modal.classList.remove('hidden')
        overlay.classList.remove('closeOverlay')
        overlay.classList.remove('displayModalHidden')
        overlay.classList.toggle('overlayModal')

        overlay.addEventListener('click', function(e) {
            const target = e.target
            if(target.className === 'overlayModal') {
                modal.classList.add('hidden')
                overlay.classList.toggle('overlayModal')
            }
                            
            if(target.getAttribute('class') === 'overlayModal overlay') {
                target.classList.remove('overlay')
                modal.classList.add('hidden')
                nav.classList.toggle('active')
                overlay.classList.toggle('overlayModal')
            }
        })
    })

    function elementsError(text) {
        p.innerText = text
        avisoError.classList.remove('blockError')
        avisoError.appendChild(p)
        setTimeout(() => avisoError.classList.add('blockError'), 3000)
    }
}
}
verifyEmptFields()