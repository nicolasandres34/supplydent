const menu = document.querySelector('.menu')
const menuNav = document.querySelector(".menuNav")

console.log(menuNav)
console.log(menu)

menu.addEventListener("click", ()=>{
    menuNav.classList.toggle("spread")
})

window.addEventListener("click", e=>{

    if (menuNav.classList.contains("spread") && e.target != menuNav && e.target != menu)

    menuNav.classList.toggle("spread")

})