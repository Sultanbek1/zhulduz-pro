const windowHeight = window.innerHeight

const revealOnTop = () => {
    let revealOnTopEl = document.querySelector("#revealOnTop")

    if (windowHeight) {
        console.log("yes")
        revealOnTopEl.classList.add('active')
    }
}

window.addEventListener('DOMContentLoaded', revealOnTop)


const reveal = () => {
    let reveals = document.querySelectorAll(".reveal")

    for (var i = 0; i < reveals.length; i++) {

        let revealTop = reveals[i].getBoundingClientRect().top;

        let revealPoint = 150


        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active")
        }
    }


    let offerItems = document.querySelectorAll('.offer-item')


    for (var i = 0; i < offerItems.length; i++) {
        let offerTop = offerItems[i].getBoundingClientRect().top;

        let offerPoint = 150

        if (offerTop < windowHeight - offerPoint) {
            offerItems[i].classList.add("active")
        }
    }

}

window.addEventListener("scroll", reveal)


