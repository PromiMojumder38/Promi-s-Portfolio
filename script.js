const eduContainers = document.querySelectorAll('.educontainer');

eduContainers.forEach((container, index) => {
  container.classList.add('slide-in');
  container.style.animationDelay = `${index * 2}s`;
});



var menuToggle = document.getElementById('checkbtn');
var list = document.querySelector('ul');

menuToggle.addEventListener('change', function() {
   list.style.left = '0';
});

closeIcon.addEventListener('click', function() {
  menuToggle.checked = false;
  list.style.left = '-100%';
});
