const eduContainers = document.querySelectorAll('.educontainer');

eduContainers.forEach((container, index) => {
  container.classList.add('slide-in');
  container.style.animationDelay = `${index * 2}s`;
});
