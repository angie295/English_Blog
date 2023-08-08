const menu1 = document.querySelector('.menu');
const menunav = document.querySelector('.menu-navegacion');

console.log(menu1)
console.log(menunav)

menu1.addEventListener('click', ()=>{
    menunav.classList.toggle("spread")
})



window.addEventListener('click', e=>{
    if(menunav.classList.contains('spread')
        && e.target != menunav && e.target != menu1 ){
            menunav.classList.toggle("spread")
    }
})