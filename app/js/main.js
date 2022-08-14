let burgerBtn = document.querySelector('.header__burger-btn')
let burgerMenu = document.querySelector('.header__burger-menu')
let burgerMenuItem = document.querySelectorAll('.header__menu-item')

burgerBtn.onclick = function() {
    burgerMenu.classList.toggle('header__burger-menu--active')
    this.classList.toggle('header__burger-btn--active')
}

burgerMenuItem.forEach(item => item.onclick = function() {
    burgerMenu.classList.remove('header__burger-menu--active')
    burgerBtn.classList.remove('header__burger-btn--active')
})