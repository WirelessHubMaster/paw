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

document.addEventListener('scroll',(event)=>{
    let scroll = this.scrollY;
    let startCarousel = false;
    if(scroll<531 && scroll >= 0){
        circle[0].classList.add('active')
        circle[1].classList.remove('active')
        circle[2].classList.remove('active')
        circle[3].classList.remove('active')
        
    }
    else if(scroll > 531 && scroll <= 1034){
        circle[1].classList.add('active');
        circle[0].classList.remove('active')
        circle[2].classList.remove('active')
        circle[3].classList.remove('active')

    }   
    else if(scroll > 1034 && scroll <= 1302){
        circle[2].classList.add('active');
        circle[1].classList.remove('active')
        circle[0].classList.remove('active')
        circle[3].classList.remove('active')
    }
    else{
        circle[3].classList.add('active');
        circle[1].classList.remove('active')
        circle[2].classList.remove('active')
        circle[0].classList.remove('active')
    }
});

let index = 0;

let sliderLinks = document.querySelectorAll('.slider_link');

setInterval(() => {
    if(sliderLinks[index].classList.contains('fade')){
        sliderLinks[index].classList.remove('fade')
    }
    index++;
    if(!sliderLinks[index].classList.contains('fade')){
        sliderLinks[index].classList.add('fade')
    }
}, 3000)
