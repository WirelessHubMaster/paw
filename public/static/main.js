const bars = document.getElementById('bars');
const cross = document.getElementById('cross');
const navList = document.getElementById('nav-list');
const circle = document.querySelectorAll('.circle');

bars.addEventListener('click',()=>{
    navList.classList.add('click')
})

cross.addEventListener('click',()=>{
    navList.classList.remove('click')
})


    
