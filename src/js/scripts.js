const menu = {
    tag: 'header',
    classeMobile: '.mobile-menu',
    classeDesktop: 'desktop-menu'
}


const referenciaMenuHidden = document.querySelector('.secao-maps').offsetTop;

function menuShow(){    
    const menuMobile = document.querySelector(menu.classeMobile);

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icone-menu-mobile').src = "src/images/menu-mobile/button_mobile.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icone-menu-mobile').src = "src/images/menu-mobile/close_mobile.svg";
    }
}

function menuHidden(){
    const scrollY = window.scrollY;
    const header = document.querySelector(menu.tag)

    if (scrollY >= (referenciaMenuHidden)) {
        header.classList.add('oculto');
    } else {
        header.classList.remove('oculto');
    }
}

window.addEventListener('scroll', menuHidden);

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function showTitleMaps() {
    let titleMaps = document.querySelector('#titulo-maps');

    if (isElementInViewport(titleMaps)) {
        titleMaps.classList.add('typing-animation');
    } else {
        titleMaps.classList.remove('typing-animation');
    }
}

function showNextNews() {
    let sectioNews = document.querySelector('#secao-news');
    let cardNews = document.querySelector('.card-wrapper ');

    if (isElementInViewport(sectioNews)) {
        cardNews.classList.add('autoplay');
    }
}


window.addEventListener('scroll', showTitleMaps);
window.addEventListener('scroll', showNextNews);

let swiper = new Swiper(".slide-container", {
    slidesPerView: 3,
    spaceBetween: 20,
    sliderPerGroup: 3,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",

    autoplay: {
        delay: 2500,
        pauseOnMouseEnter: true,
        disableOnInteraction: false
    },

    pagination: {
        el: ".swiper-pagination", 
        clickable: true, 
        dynamicBullets: true
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 1,
        },
        750: {
            slidesPerView: 2,
        },
        1100: {
            slidesPerView: 3
        }
    },
});

