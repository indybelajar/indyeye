// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

// Portfolio container arrow scroll
const container = document.querySelector('.portfolio-container');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

leftArrow.addEventListener('click', () => {
  container.scrollBy({ left: -300, behavior: 'smooth' });
});

rightArrow.addEventListener('click', () => {
  container.scrollBy({ left: 300, behavior: 'smooth' });
});
