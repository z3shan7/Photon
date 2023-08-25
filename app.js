const sidebarDropDown = document.getElementById('side-icon')
const dropDownList = document.querySelector('.sidebar__dropdown-list')

console.log(dropDownList)

sidebarDropDown.addEventListener('click', () => {
    dropDownList.classList.toggle('sidebar__active')

})