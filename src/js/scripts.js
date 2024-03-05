const menu = {tag: 'header', classeMobile: '.mobile-menu', classeDesktop: 'desktop-menu'}
const referenciaMenuHidden = document.querySelector('#secao-endereco').offsetTop;

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

    if (scrollY >= referenciaMenuHidden) {
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

window.addEventListener('scroll', showTitleMaps);
