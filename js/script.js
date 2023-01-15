//  burger

const menuIcon = document.querySelector('.header__burger')

if (menuIcon) {
    const menu = document.querySelector('.header__menu')
    menuIcon.addEventListener('click', function (event) {
        menuIcon.classList.toggle('_active')
        menu.classList.toggle('_active')
    })
}

// scrollTo

document.querySelector('.big-pic__down-part').addEventListener('click', function() {
    document.querySelector('.header__container').scrollIntoView({behavior: 'smooth',})
})