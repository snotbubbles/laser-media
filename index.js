const menu = document.getElementById('nav-menu')
const menuToggle = document.querySelectorAll('.menu-btn')
const sliders = document.querySelectorAll('.slider')
const sliderContainer = document.querySelector(".before-and-after-ctr")
const contactForm = document.getElementById("contact-form")
const portfolioContainer = document.getElementById("portfolio-ctr")


for (const btn of menuToggle) {
    btn.addEventListener("click", () => {
        if(menu.style.transform ===  "translateX(100%)") {
            menu.style.transform = "translateX(0)"
            menu.setAttribute("aria-hidden", "false")
            for(const toggle of menuToggle) {
                toggle.setAttribute("aria-expanded", "true")
            }
        }

        else {
            menu.style.transform = "translateX(100%)"
            menu.setAttribute("aria-hidden", "true")
            for(const toggle of menuToggle) {
                toggle.setAttribute("aria-expanded", "false")
            }
        }
    })
}

if (sliders) {
    sliders.forEach(slider => {
        const container = slider.closest('.before-and-after-ctr'); // Find the matching container

        slider.addEventListener('input', (e) => {
            container.style.setProperty('--position', `${e.target.value}%`)
  })
})
    }

if(contactForm) {
    contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    let formError = false

    const contactFormData = new FormData(contactForm)
    
    const fields = ['name', 'email', 'phone', 'message', 'terms']

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^(?:\+27|0)[6-8][0-9]{8}$/
    let fieldsObj = {}

    fields.forEach((field => {
        const value = contactFormData.get(field)
        const inputEl = document.getElementById(field)
        const errorEl = document.getElementById(`${field}-error`)

        let hasError = false

        fieldsObj[field] = value

        if(field === "terms") {
            if(!inputEl.checked) {
                hasError = true
            }
        }

        else if(!value || value.trim() === "") {
            hasError = true
        }

        else if(field === "email" && !emailRegex.test(value)) {
            hasError = true
        }

        else if(field === "phone" && !phoneRegex.test(value)) {
            hasError = true
        }

        if (hasError) {
            errorEl.classList.add("error-show")
            errorEl.classList.remove("error-hide")
            inputEl.classList.add("form-error")
            inputEl.setAttribute("aria-invalid", "true")
            formError = true
        }

        else {
            errorEl.classList.remove("error-show")
            errorEl.classList.add("error-hide")
            inputEl.classList.remove("form-error")
            inputEl.removeAttribute("aria-invalid") 
        }
    }))

    if(!formError) {
        contactForm.submit()
        contactForm.innerHTML ="<h1>thank you!</h1>"
    }

    else {
    const firstErrorField = document.querySelector(".form-error");
    if (firstErrorField) firstErrorField.focus();
    }
    })
}

if(portfolioContainer) {
    portfolioContainer.addEventListener('click', (e) => {

        const modal = document.getElementById("portfolio-modal")
        const carousel = document.querySelector("#carouselExample")
        const index = e.target.dataset.bsSlideTo

        if(index) {
            modal.classList.remove("hidden")
               const bsCarousel = bootstrap.Carousel.getInstance(carousel) || new bootstrap.Carousel(carousel);
                bsCarousel.to(Number(index))
        }

       else if(e.target.closest(".modal-close-btn")) {
            modal.classList.add("hidden")
        }
    })
}


