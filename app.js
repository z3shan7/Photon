const sidebarDropDown = document.getElementById('side-icon')
const dropDownList = document.querySelector('.sidebar__dropdown-list')

const subBtn = document.getElementById('subdropdown')
const subDropdownContent = document.querySelector('.sidebar__sub-dropdown')
console.log(subdropdown)

sidebarDropDown.addEventListener('click', () => {
    dropDownList.classList.toggle('sidebar__active')

})

subBtn.addEventListener('click', () => {
    subDropdownContent.classList.toggle('sidebar__sub-dropdown-active')

})

const hamIcon = document.querySelector('.menu__icon')
const sidebar = document.querySelector('.sidebar')
const closeIcon = document.querySelector('.sidebar__closeBtn')

console.log(sidebar)

hamIcon.addEventListener('click', () => {
    sidebar.classList.add('sidebar__show')


})
closeIcon.addEventListener('click', () => {
    sidebar.classList.remove('sidebar__show')
})

// active links


const navlinkEls = document.querySelectorAll('.navbar__navlinks');
const windowPathname = window.location.pathname;

navlinkEls.forEach(navlinkEl => {
    const navLinkPathname = new URL(navlinkEl.href).pathname;


    if ((windowPathname === navLinkPathname) || (windowPathname === '/index.html' && navLinkPathname === '/')) {
        navlinkEl.classList.add('active')
    }
})

const sideNavLinksEls = document.querySelectorAll('.sidebar__links')
// const windowPathname = window.location.pathname;

sideNavLinksEls.forEach(sideLinkEl => {
    const sideNavPathname = new URL(sideLinkEl.href).pathname;

    if ((windowPathname === sideNavPathname) || (windowPathname === '/index.html' && sideNavPathname === '/')) {
        sideLinkEl.classList.add('active-link')
    }


})