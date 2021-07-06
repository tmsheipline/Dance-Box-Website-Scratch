const btn = document.querySelector('.btn');
const videoContainer = document.querySelector('.video-container');
const close = document.querySelector('.close');

btn.addEventListener('click',()=>{
    videoContainer.classList.add('show');
})

close.addEventListener('click',()=>{
    videoContainer.classList.remove('show');
})