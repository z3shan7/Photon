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