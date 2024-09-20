document.addEventListener('keydown', (event) =>{
const img = document.getElementById('box');
const step = 100;
let left = parseInt(window.getComputedStyle(img).left);
if (event.key === 'ArrowLeft'){
    img.style.left = `${left - step}px`;
} else if (event.key === 'ArrowRight'){
    img.style.left = `${left + step}px`;
}
});