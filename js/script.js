const images = ['batman.jpg', 'naruto.png', 'mario.png'];
const frontImage = document.getElementById('front-image');
const backImage = document.getElementById('back-image');
const container = document.getElementById('container');
let animatedImage = 0;

let index = 0;

const getAbsolutePath = () => {
  const loc = window.location;
  const pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
  return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
}


const next = () => {
  const first = index;
  const second = index === 0 ? images.length - 1 : index - 1;
  index = second;
  frontImage.classList.remove('img__animate');
  frontImage.setAttribute('src', `${getAbsolutePath()}/assets/${images[first]}`);
  backImage.setAttribute('src', `${getAbsolutePath()}/assets/${images[second]}`);
  setTimeout(() => {
    frontImage.classList.add('img__animate');
  }, 10);
  setTimeout(() => {
    next();
  }, 3000);
}


window.addEventListener('load', () =>{
  next();
})