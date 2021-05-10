const menu = document.getElementById('burger_menu')
const header_menu = document.getElementById('header_menu')

menu.addEventListener('click', () => {
    header_menu.classList.toggle('open')
})


