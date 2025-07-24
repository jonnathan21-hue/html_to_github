
const showBtn = document.getElementById('show-menu-btn');
const backBtn = document.getElementById('back-btn');
const menu = document.getElementById('menu-section');
const home = document.getElementById('home-section');

showBtn.addEventListener('click', () => {
  menu.classList.add('show');
  home.scrollIntoView({ behavior: 'smooth' });
  home.style.display = 'none';
});

backBtn.addEventListener('click', () => {
  menu.classList.remove('show');
  home.style.display = 'block';
});

const imgs = document.querySelectorAll('.carousel img');
let idx = 0;
setInterval(() => {
  imgs[idx].classList.remove('active');
  idx = (idx + 1) % imgs.length;
  imgs[idx].classList.add('active');
}, 4000);
