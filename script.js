let starsGallery = document.querySelector('.bg-image-stars');
let main = document.querySelector('.main')

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    starsGallery.style.marginRight = scrollY * 0.5 + 'px'
})