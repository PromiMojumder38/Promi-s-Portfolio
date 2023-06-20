const eduContainers = document.querySelectorAll('.educontainer');

eduContainers.forEach((container, index) => {
  container.classList.add('slide-in');
  container.style.animationDelay = `${index * 2}s`;
});



var menuToggle = document.getElementById('checkbtn');
var list = document.querySelector('ul');
var closeIcon = document.querySelector('.closebtn');

menuToggle.addEventListener('change', function() {
   list.style.left = '0';
    closeIcon.style.display = 'block';
    menuToggle.style.display = 'none';

});

closeIcon.addEventListener('click', function() {
  menuToggle.checked = false;
  list.style.left = '-100%';
  closeIcon.style.display = 'none';
  menuToggle.style.display = 'block';
});

var listItems = document.querySelector('ul li a');


  listItems.addEventListener('click', function() {
    list.style.display ='none';
    closeIcon.style.display = 'none';
    menuToggle.style.display = 'block';
  });
  