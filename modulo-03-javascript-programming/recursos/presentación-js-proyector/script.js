const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

// Navegación con teclado
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
  if (e.key === 'ArrowLeft') {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }
});

showSlide(currentSlide);
