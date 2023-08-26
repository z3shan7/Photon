const sidebarDropDown = document.getElementById('side-icon')
const dropDownList = document.querySelector('.sidebar__dropdown-list')


sidebarDropDown.addEventListener('click', () => {
    dropDownList.classList.toggle('sidebar__active')

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