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

const menuLink = document.querySelectorAll[]