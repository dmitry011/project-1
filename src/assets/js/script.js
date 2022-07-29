// device check
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
}

// ------------MENU LIST OPENING------------
const body = document.body;
if (!isMobile.any()) body.classList.add('body-pc');
if (isMobile.any()) {
    body.classList.add('body-mobile');
    const menuItems = document.querySelectorAll('.menu__item');
    for (let index = 0; index < menuItems.length; index++) {
        const menuItem = menuItems[index];
        menuItem.addEventListener('click', () => {
            menuItem.classList.toggle('menu__item--open');
        });
    }
}

// ------------MENU------------
const headerBtn = document.querySelector('.header__button');
const headerBody = document.querySelector('.header__body');
const headerCoverSpace = document.querySelector('.header__cover-space');

headerBtn.addEventListener('click', () => {
    const expanded = headerBtn.getAttribute('aria-expanded') === 'true';
    if (body.style.overflow === 'hidden') {
        body.style.overflow = 'visible';
    } else {
        body.style.overflow = 'hidden';
    }
    headerBtn.classList.toggle('header__button--active');
    headerBtn.setAttribute('aria-expanded', !expanded);
    headerBody.classList.toggle('header__body--open');
    headerCoverSpace.classList.toggle('header__cover-space--active');
});

if (body.classList.contains('body-pc')) {

    // ------------HEADER AFTER SCROLLING------------
    window.addEventListener('scroll', () => {
        const scrollDistance = window.scrollY;
        if (scrollDistance >= 50) {
            headerBody.style.opacity = '.65';
            headerBody.classList.add('header__body--scrolled');
        } else {
            headerBody.style.opacity = null;
            headerBody.classList.remove('header__body--scrolled');
        }
    });

    // ------------HEADER__BODY HOVERING------------
    headerBody.addEventListener('mouseover', () => {
        if (headerBody.classList.contains('header__body--scrolled'))
            headerBody.style.opacity = null;
    });
    headerBody.addEventListener('mouseleave', () => {
        if (headerBody.classList.contains('header__body--scrolled'))
            headerBody.style.opacity = '.65';
    });
}