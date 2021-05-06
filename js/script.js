const images = ['batman.jpg', 'naruto.png', 'mario.png'];
const frontImage = document.getElementById('front-image');
const backImage = document.getElementById('back-image');
const container = document.getElementById('container');
let animatedImage = 0;

let index = 0;
const next = () => {
  const first = index;
  const second = index === 0 ? images.length - 1 : index - 1;
  index = second;
  frontImage.classList.remove('img__animate');
  frontImage.setAttribute('src', `/assets/${images[first]}`);
  backImage.setAttribute('src', `/assets/${images[second]}`);
  setTimeout(() => {
    frontImage.classList.add('img__animate');
  }, 10);
  setTimeout(() => {
    next();
  }, 1000);
}

window.addEventListener('load', () =>{
  next();
})