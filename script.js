const eduContainers = document.querySelectorAll('.educontainer');

eduContainers.forEach((container, index) => {
  container.classList.add('slide-in');
  container.style.animationDelay = `${index * 2}s`;
});
var menuToggle = document.getElementById('check');
var list = document.querySelector('ul');
var menuIcon = document.querySelector('.checkbtn');
var closeIcon = document.querySelector('.closebtn');

menuToggle.addEventListener('change', function() {
  list.style.left = '0';
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';

});

closeIcon.addEventListener('click', function() {
  list.style.left = '-100%';
  menuIcon.style.display = 'block';
  closeIcon.style.display = 'none';
});
