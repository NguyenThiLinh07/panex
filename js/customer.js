var searchIcon = document.querySelector('.search-icon')
var search = document.querySelector('.search')
var sliderNews = document.querySelector('.slider-news .owl-carousel')
var openBar = document.querySelector('.nav-bars-btn i')
var modal = document.querySelector('.modal')

searchIcon.addEventListener('click', function() {
    search.classList.toggle('hide')
})

function toggleModal(e) {
    e.classList.toggle("hide")
}

const stopPropagation = (e) => {
    e.stopPropagation()
}

search.onclick = (e) => {
    stopPropagation(e)
}

document.querySelector('.nav').onclick = (e) => {
    stopPropagation(e)
}

window.onclick = (e) => {
    // console.log(e.target);
    if (e.target === openBar)
        toggleModal(modal)
    if (e.target === document.querySelector('.nav-overlay'))
        modal.classList.remove('hide')
}

$(function() {
    $('.banner').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            }
        },
        autoplay: true,
        autoplayTimeout: 5000
    })
    $('.slider-partner .owl-carousel').owlCarousel({
        loop: 0,
        margin: 15,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        },
        autoplay: true,
        autoplayTimeout: 5000
    })
    $(sliderNews).owlCarousel({
        loop: true,
        margin: 35,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        },
        autoplay: true,
        autoplayTimeout: 5000
    })
})