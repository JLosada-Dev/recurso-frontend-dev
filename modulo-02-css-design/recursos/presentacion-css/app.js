// CSS Presentation Navigation System
// Optimized for projector visibility

// Force light mode for better projector visibility
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.setAttribute('data-color-scheme', 'light');
  console.log(
    '🎯 Projector mode enabled - using optimized colors for better visibility'
  );
});

class PresentationController {
  constructor() {
    this.currentSlide = 1;
    this.totalSlides = 24;
    this.slides = document.querySelectorAll('.slide');
    this.modal = document.getElementById('indexModal');

    // Ensure elements exist before initializing
    if (this.slides.length === 0) {
      console.error('No slides found! Check your HTML structure.');
      return;
    }

    // Enable projector optimizations
    this.enableProjectorMode();

    this.initializeElements();
    this.bindEvents();
    this.updateSlideCounter();
    this.showSlide(this.currentSlide);
    this.updateButtonStates();

    console.log('✅ PresentationController initialized successfully');
  }

  // Optimize display for projector visibility
  enableProjectorMode() {
    document.documentElement.setAttribute('data-color-scheme', 'light');
    // Slightly enhance brightness and contrast for poor projectors
    if (document.body) {
      document.body.style.filter = 'brightness(1.05) contrast(1.05)';
    }
    console.log('🎯 Projector optimizations applied');
  }

  initializeElements() {
    this.prevBtn = document.getElementById('prevBtn');
    this.nextBtn = document.getElementById('nextBtn');
    this.indexBtn = document.getElementById('indexBtn');
    this.slideCounter = document.getElementById('slideCounter');
    this.closeModalBtn = document.getElementById('closeModal');
    this.indexNavButtons = document.querySelectorAll('.index-nav-btn');

    // Log missing elements for debugging
    if (!this.prevBtn) console.error('Previous button not found');
    if (!this.nextBtn) console.error('Next button not found');
    if (!this.indexBtn) console.error('Index button not found');
    if (!this.modal) console.error('Modal not found');
  }

  bindEvents() {
    // Navigation button events with null checks
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Previous button clicked');
        this.previousSlide();
      });
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Next button clicked');
        this.nextSlide();
      });
    }

    if (this.indexBtn) {
      this.indexBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Index button clicked');
        this.openModal();
      });
    }

    // Modal events
    if (this.closeModalBtn) {
      this.closeModalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.closeModal();
      });
    }

    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) {
          this.closeModal();
        }
      });
    }

    // Index navigation buttons
    this.indexNavButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const slideNumber = parseInt(e.target.dataset.slide);
        console.log('Jumping to slide:', slideNumber);
        this.goToSlide(slideNumber);
        this.closeModal();
      });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => this.handleKeyDown(e));

    // Touch/swipe events for mobile
    this.bindTouchEvents();

    console.log('✅ All events bound successfully');
  }

  bindTouchEvents() {
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    document.addEventListener(
      'touchstart',
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
      },
      { passive: true }
    );

    document.addEventListener(
      'touchend',
      (e) => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        this.handleSwipe(touchStartX, touchStartY, touchEndX, touchEndY);
      },
      { passive: true }
    );
  }

  handleSwipe(startX, startY, endX, endY) {
    const deltaX = endX - startX;
    const deltaY = endY - startY;
    const minSwipeDistance = 50;

    // Only process horizontal swipes that are longer than vertical ones
    if (
      Math.abs(deltaX) > Math.abs(deltaY) &&
      Math.abs(deltaX) > minSwipeDistance
    ) {
      if (deltaX > 0) {
        this.previousSlide(); // Swipe right -> previous slide
      } else {
        this.nextSlide(); // Swipe left -> next slide
      }
    }
  }

  handleKeyDown(e) {
    // Ignore if modal is open and not escape key
    if (!this.modal.classList.contains('hidden') && e.key !== 'Escape') {
      return;
    }

    // Prevent default for navigation keys
    if (
      ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(
        e.key
      )
    ) {
      e.preventDefault();
    }

    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
      case ' ': // Space bar
      case 'PageDown':
        this.nextSlide();
        break;

      case 'ArrowLeft':
      case 'ArrowUp':
      case 'PageUp':
        this.previousSlide();
        break;

      case 'Home':
        this.goToSlide(1);
        break;

      case 'End':
        this.goToSlide(this.totalSlides);
        break;

      case 'i':
      case 'I':
        this.openModal();
        break;

      case 'Escape':
        this.closeModal();
        break;

      // Number keys for direct navigation
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        const slideNum = parseInt(e.key);
        if (slideNum <= this.totalSlides) {
          this.goToSlide(slideNum);
        }
        break;

      case '0':
        if (10 <= this.totalSlides) {
          this.goToSlide(10);
        }
        break;
    }
  }

  nextSlide() {
    if (this.currentSlide < this.totalSlides) {
      this.currentSlide++;
      this.showSlide(this.currentSlide);
      this.updateSlideCounter();
      this.updateButtonStates();
      console.log('Moved to slide:', this.currentSlide);
    }
  }

  previousSlide() {
    if (this.currentSlide > 1) {
      this.currentSlide--;
      this.showSlide(this.currentSlide);
      this.updateSlideCounter();
      this.updateButtonStates();
      console.log('Moved to slide:', this.currentSlide);
    }
  }

  goToSlide(slideNumber) {
    if (slideNumber >= 1 && slideNumber <= this.totalSlides) {
      this.currentSlide = slideNumber;
      this.showSlide(this.currentSlide);
      this.updateSlideCounter();
      this.updateButtonStates();
      console.log('Jumped to slide:', this.currentSlide);
    }
  }

  showSlide(slideNumber) {
    // Hide all slides
    this.slides.forEach((slide) => {
      slide.classList.remove('active');
    });

    // Show target slide
    const targetSlide = document.querySelector(`[data-slide="${slideNumber}"]`);
    if (targetSlide) {
      targetSlide.classList.add('active');
      console.log('Showing slide:', slideNumber);

      // Trigger any slide-specific animations or effects
      this.triggerSlideEffects(slideNumber);
    } else {
      console.error('Slide not found:', slideNumber);
    }
  }

  triggerSlideEffects(slideNumber) {
    // Add specific effects for certain slides
    switch (slideNumber) {
      case 19: // Animations slide
        this.animateTransitionDemo();
        break;
      default:
        break;
    }
  }

  animateTransitionDemo() {
    // Add a subtle pulse to the animated button on the animations slide
    setTimeout(() => {
      const animatedButton = document.querySelector('.animated-button');
      if (animatedButton) {
        animatedButton.style.animation = 'none';
        setTimeout(() => {
          animatedButton.style.animation = 'pulse 2s ease-in-out infinite';
        }, 10);
      }
    }, 500);
  }

  updateSlideCounter() {
    if (this.slideCounter) {
      this.slideCounter.textContent = `${this.currentSlide} / ${this.totalSlides}`;
    }
  }

  updateButtonStates() {
    // Update button states based on current slide
    if (this.prevBtn) {
      this.prevBtn.disabled = this.currentSlide === 1;
      this.prevBtn.style.opacity = this.currentSlide === 1 ? '0.6' : '1';
    }

    if (this.nextBtn) {
      this.nextBtn.disabled = this.currentSlide === this.totalSlides;
      this.nextBtn.style.opacity =
        this.currentSlide === this.totalSlides ? '0.6' : '1';
    }
  }

  openModal() {
    if (this.modal) {
      this.modal.style.display = 'flex';
      this.modal.classList.add('active');
      console.log('Modal opened');

      // Focus on the close button for accessibility
      if (this.closeModalBtn) {
        this.closeModalBtn.focus();
      }

      // Highlight current slide in modal
      this.highlightCurrentSlideInModal();
    }
  }

  closeModal() {
    if (this.modal) {
      this.modal.style.display = 'none';
      this.modal.classList.remove('active');
      console.log('Modal closed');

      // Return focus to the index button
      if (this.indexBtn) {
        this.indexBtn.focus();
      }
    }
  }

  highlightCurrentSlideInModal() {
    // Remove previous highlights
    this.indexNavButtons.forEach((btn) => {
      btn.classList.remove('current-slide');
    });

    // Highlight current slide
    const currentSlideBtn = document.querySelector(
      `.index-nav-btn[data-slide="${this.currentSlide}"]`
    );
    if (currentSlideBtn) {
      currentSlideBtn.classList.add('current-slide');
      currentSlideBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  // Get presentation progress
  getProgress() {
    return {
      current: this.currentSlide,
      total: this.totalSlides,
      percentage: Math.round((this.currentSlide / this.totalSlides) * 100),
    };
  }
}

// CSS Animation keyframes for effects
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
    
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .current-slide {
        background: var(--color-primary) !important;
        color: var(--color-btn-primary-text) !important;
        font-weight: var(--font-weight-bold) !important;
        border-color: var(--color-primary) !important;
    }
    
    .nav-btn:disabled {
        cursor: not-allowed !important;
        opacity: 0.6 !important;
    }
    
    .slide-content {
        animation: slideIn 0.5s ease-out;
    }
    
    /* Smooth transitions for slides */
    .slide {
        transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    }
    
    /* Button hover effects */
    .nav-btn:not(:disabled):hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    
    .nav-btn:not(:disabled):active {
        transform: translateY(0);
    }
    
    /* Index button visual feedback */
    .index-nav-btn:hover {
        transform: translateX(8px);
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
`;

// Add styles to document head
if (document.head) {
  document.head.appendChild(styleSheet);
}

// Initialize the presentation when DOM is ready
function initializePresentation() {
  console.log('🎯 Initializing CSS Presentation...');

  // Create presentation controller
  const presentation = new PresentationController();

  // Make it globally accessible for debugging
  window.presentation = presentation;

  // Add helpful console messages
  console.log('🎯 CSS Presentation loaded successfully!');
  console.log('⌨️  Keyboard shortcuts:');
  console.log('   → ↓ Space: Next slide');
  console.log('   ← ↑: Previous slide');
  console.log('   i: Open index modal');
  console.log('   Esc: Close modal');
  console.log('   Home: First slide');
  console.log('   End: Last slide');
  console.log('   1-9: Jump to slide number');

  // Optional: Add presentation tips after a delay
  setTimeout(() => {
    if (presentation.currentSlide === 1) {
      console.log(
        '💡 Tip: Press "i" to open the slide index or use arrow keys to navigate!'
      );
    }
  }, 3000);

  return presentation;
}

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializePresentation);
} else {
  // DOM is already loaded
  initializePresentation();
}

// Handle window resize
window.addEventListener('resize', () => {
  // Refresh current slide display if presentation exists
  if (window.presentation) {
    window.presentation.showSlide(window.presentation.currentSlide);
  }
});

// Handle visibility change (tab switching)
document.addEventListener('visibilitychange', () => {
  if (
    document.hidden &&
    window.presentation &&
    window.presentation.stopAutoAdvance
  ) {
    // Pause any auto-advance when tab is hidden
    window.presentation.stopAutoAdvance();
  }
});

// Utility functions for external control
window.PresentationUtils = {
  goToSlide: (slideNumber) => {
    if (window.presentation) {
      window.presentation.goToSlide(slideNumber);
    }
  },

  nextSlide: () => {
    if (window.presentation) {
      window.presentation.nextSlide();
    }
  },

  previousSlide: () => {
    if (window.presentation) {
      window.presentation.previousSlide();
    }
  },

  getProgress: () => {
    return window.presentation ? window.presentation.getProgress() : null;
  },

  openIndex: () => {
    if (window.presentation) {
      window.presentation.openModal();
    }
  },
};

// Export for module systems if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PresentationController;
}
