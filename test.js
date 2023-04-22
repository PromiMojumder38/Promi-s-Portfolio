const sections = document.querySelectorAll('.section');
const links = document.querySelectorAll('a[data-section]');

links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const sectionId = event.target.getAttribute('data-section');
    activateSection(sectionId);
  });
});

function activateSection(sectionId) {
  sections.forEach(section => {
    section.classList.remove('active');
  });
  const section = document.querySelector(`.section.${sectionId}`);
  section.classList.add('active');
}
