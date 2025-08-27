class HTMLSlideshow {
    constructor() {
        this.currentSlide = 1;
        this.totalSlides = 18; // Updated for the expanded presentation
        this.slides = document.querySelectorAll('.slide');
        this.currentSlideElement = document.getElementById('current-slide');
        this.totalSlidesElement = document.getElementById('total-slides');
        this.prevBtn = document.getElementById('prev-btn');
        this.nextBtn = document.getElementById('next-btn');
        this.indexBtn = document.getElementById('index-btn');
        this.indexModal = document.getElementById('index-modal');
        this.closeIndexBtn = document.getElementById('close-index');
        
        this.init();
    }

    init() {
        // Set initial state
        this.updateSlideCounter();
        this.updateNavigationButtons();
        this.totalSlidesElement.textContent = this.totalSlides;
        
        // Event listeners with proper binding - Fixed
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Previous button clicked');
                this.previousSlide();
            });
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Next button clicked');
                this.nextSlide();
            });
        }
        
        if (this.indexBtn) {
            this.indexBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Index button clicked');
                this.showIndex();
            });
        }
        
        if (this.closeIndexBtn) {
            this.closeIndexBtn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Close index button clicked');
                this.hideIndex();
            });
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
        
        // Index navigation - Fixed to use event delegation
        document.addEventListener('click', (e) => {
            if (e.target.matches('[data-goto]')) {
                e.preventDefault();
                e.stopPropagation();
                const slideNumber = parseInt(e.target.getAttribute('data-goto'));
                console.log(`Index navigation: going to slide ${slideNumber}`);
                this.showSlide(slideNumber);
                this.hideIndex();
            }
        });
        
        // Modal click outside to close
        if (this.indexModal) {
            this.indexModal.addEventListener('click', (e) => {
                if (e.target === this.indexModal) {
                    this.hideIndex();
                }
            });
        }
        
        console.log('HTMLSlideshow initialized with all event listeners');
    }

    showSlide(slideNumber) {
        // Validate slide number
        if (slideNumber < 1 || slideNumber > this.totalSlides) {
            console.log(`Invalid slide number: ${slideNumber}`);
            return;
        }

        console.log(`Navigating to slide ${slideNumber}`);

        // Hide all slides first
        this.slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Show target slide
        const targetSlide = document.querySelector(`[data-slide="${slideNumber}"]`);
        if (targetSlide) {
            targetSlide.classList.add('active');
            console.log(`Slide ${slideNumber} is now active`);
        } else {
            console.error(`Could not find slide with data-slide="${slideNumber}"`);
            return;
        }

        // Update current slide
        this.currentSlide = slideNumber;
        this.updateSlideCounter();
        this.updateNavigationButtons();
        
        // Scroll to top of slide
        window.scrollTo(0, 0);

        // Announce slide change for screen readers
        this.announceSlideChange();
    }

    nextSlide() {
        console.log(`Next slide requested. Current: ${this.currentSlide}, Max: ${this.totalSlides}`);
        if (this.currentSlide < this.totalSlides) {
            this.showSlide(this.currentSlide + 1);
        } else {
            console.log('Already on last slide');
        }
    }

    previousSlide() {
        console.log(`Previous slide requested. Current: ${this.currentSlide}`);
        if (this.currentSlide > 1) {
            this.showSlide(this.currentSlide - 1);
        } else {
            console.log('Already on first slide');
        }
    }

    updateSlideCounter() {
        if (this.currentSlideElement) {
            this.currentSlideElement.textContent = this.currentSlide;
        }
    }

    updateNavigationButtons() {
        // Update previous button
        if (this.prevBtn) {
            if (this.currentSlide === 1) {
                this.prevBtn.disabled = true;
                this.prevBtn.classList.add('disabled');
            } else {
                this.prevBtn.disabled = false;
                this.prevBtn.classList.remove('disabled');
            }
        }

        // Update next button
        if (this.nextBtn) {
            if (this.currentSlide === this.totalSlides) {
                this.nextBtn.disabled = true;
                this.nextBtn.classList.add('disabled');
            } else {
                this.nextBtn.disabled = false;
                this.nextBtn.classList.remove('disabled');
            }
        }
    }

    handleKeyboard(event) {
        // Ignore keyboard events when modal is open
        if (this.indexModal && !this.indexModal.classList.contains('hidden')) {
            if (event.key === 'Escape') {
                this.hideIndex();
            }
            return;
        }

        switch (event.key) {
            case 'ArrowLeft':
                event.preventDefault();
                this.previousSlide();
                break;
            case 'ArrowRight':
                event.preventDefault();
                this.nextSlide();
                break;
            case 'Home':
                event.preventDefault();
                this.showSlide(1);
                break;
            case 'End':
                event.preventDefault();
                this.showSlide(this.totalSlides);
                break;
            case 'Escape':
                this.hideIndex();
                break;
            case ' ':
                event.preventDefault();
                this.nextSlide();
                break;
            case 'Backspace':
                event.preventDefault();
                this.previousSlide();
                break;
        }
    }

    showIndex() {
        console.log('Showing index modal');
        if (this.indexModal) {
            this.indexModal.classList.remove('hidden');
            // Focus on first link for accessibility
            const firstLink = this.indexModal.querySelector('a');
            if (firstLink) {
                setTimeout(() => firstLink.focus(), 100);
            }
            
            // Prevent body scrolling when modal is open
            document.body.style.overflow = 'hidden';
        } else {
            console.error('Index modal not found');
        }
    }

    hideIndex() {
        console.log('Hiding index modal');
        if (this.indexModal) {
            this.indexModal.classList.add('hidden');
            // Return focus to index button
            if (this.indexBtn) {
                this.indexBtn.focus();
            }
            // Restore body scrolling
            document.body.style.overflow = '';
        }
    }

    announceSlideChange() {
        // Get slide title for screen reader announcement
        const currentSlideElement = document.querySelector(`[data-slide="${this.currentSlide}"]`);
        if (currentSlideElement) {
            const titleElement = currentSlideElement.querySelector('h1, h2, h3');
            const title = titleElement ? titleElement.textContent : `Diapositiva ${this.currentSlide}`;
            
            // Update live region if it exists
            const liveRegion = document.getElementById('slide-announcements');
            if (liveRegion) {
                liveRegion.textContent = `${title}. Diapositiva ${this.currentSlide} de ${this.totalSlides}`;
            }
        }
    }

    // Public methods
    goToSlide(slideNumber) {
        this.showSlide(slideNumber);
    }

    getCurrentSlide() {
        return this.currentSlide;
    }

    getTotalSlides() {
        return this.totalSlides;
    }

    // Jump to specific sections quickly
    goToSection(section) {
        const sectionMap = {
            'intro': 3,
            'setup': 4,
            'anatomy': 5,
            'tags': 6,
            'semantic': 7,
            'semanticTags': 8,
            'text': 9,
            'lists': 10,
            'links': 11,
            'forms': 12,
            'media': 13,
            'tables': 14,
            'void': 15,
            'example': 16,
            'practices': 17,
            'resources': 18
        };
        
        if (sectionMap[section]) {
            this.showSlide(sectionMap[section]);
        }
    }
}

// Enhanced functionality for better UX and projector visibility
class SlideshowEnhancer {
    constructor(slideshow) {
        this.slideshow = slideshow;
        this.init();
    }

    init() {
        // Add smooth scrolling for better navigation experience
        this.addSmoothScrolling();
        
        // Add touch/swipe support for mobile and touch projectors
        this.addTouchSupport();
        
        // Add enhanced progress indicator
        this.addProgressIndicator();
        
        // Add presentation mode enhancements
        this.addPresentationMode();
    }

    addSmoothScrolling() {
        // Add CSS smooth scrolling behavior
        document.documentElement.style.scrollBehavior = 'smooth';
    }

    addTouchSupport() {
        let startX = 0;
        let endX = 0;
        let startY = 0;
        let endY = 0;
        const threshold = 50; // Minimum distance for swipe
        const restraint = 100; // Maximum vertical distance for horizontal swipe

        const slidesWrapper = document.querySelector('.slides-wrapper');
        if (!slidesWrapper) return;

        slidesWrapper.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }, { passive: true });

        slidesWrapper.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            endY = e.changedTouches[0].clientY;
            this.handleSwipe();
        }, { passive: true });

        this.handleSwipe = () => {
            const distanceX = startX - endX;
            const distanceY = Math.abs(startY - endY);
            
            // Only register horizontal swipes
            if (Math.abs(distanceX) > threshold && distanceY < restraint) {
                if (distanceX > 0) {
                    // Swipe left - next slide
                    this.slideshow.nextSlide();
                } else {
                    // Swipe right - previous slide
                    this.slideshow.previousSlide();
                }
            }
        };
    }

    addProgressIndicator() {
        // Create enhanced progress bar for projector visibility
        const progressBar = document.createElement('div');
        progressBar.className = 'progress-bar';
        progressBar.innerHTML = '<div class="progress-fill"></div>';
        
        document.body.appendChild(progressBar);

        // Update progress bar
        const updateProgress = () => {
            const progress = (this.slideshow.getCurrentSlide() / this.slideshow.getTotalSlides()) * 100;
            const progressFill = progressBar.querySelector('.progress-fill');
            if (progressFill) {
                progressFill.style.width = `${progress}%`;
            }
        };

        // Store original method and wrap it
        const originalShowSlide = this.slideshow.showSlide.bind(this.slideshow);
        this.slideshow.showSlide = (slideNumber) => {
            originalShowSlide(slideNumber);
            updateProgress();
        };

        // Initial progress update
        updateProgress();
    }

    addPresentationMode() {
        // Add fullscreen support for presentation mode
        const addFullscreenButton = () => {
            const fullscreenBtn = document.createElement('button');
            fullscreenBtn.textContent = '⛶ Pantalla Completa';
            fullscreenBtn.className = 'btn btn--outline';
            fullscreenBtn.style.marginLeft = 'auto';
            fullscreenBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleFullscreen();
            });
            
            const header = document.querySelector('.slideshow-header');
            if (header) {
                header.appendChild(fullscreenBtn);
            }
        };

        // Add timer display for presentations
        const addTimer = () => {
            const timer = document.createElement('div');
            timer.id = 'presentation-timer';
            timer.style.cssText = `
                position: fixed;
                top: 10px;
                right: 10px;
                background: rgba(26, 54, 93, 0.9);
                color: white;
                padding: 8px 12px;
                border-radius: 4px;
                font-family: monospace;
                font-size: 14px;
                z-index: 1001;
                display: none;
            `;
            document.body.appendChild(timer);
        };

        addFullscreenButton();
        addTimer();
    }

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().then(() => {
                // Show timer when in fullscreen
                const timer = document.getElementById('presentation-timer');
                if (timer) {
                    timer.style.display = 'block';
                    timer.textContent = '00:00';
                    // Start timer
                    const startTime = Date.now();
                    const timerInterval = setInterval(() => {
                        const elapsed = Date.now() - startTime;
                        const minutes = Math.floor(elapsed / 60000);
                        const seconds = Math.floor((elapsed % 60000) / 1000);
                        timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                    }, 1000);
                    
                    // Store interval to clear later
                    timer.dataset.interval = timerInterval;
                }
            }).catch(err => {
                console.log('Error enabling fullscreen:', err);
            });
        } else {
            document.exitFullscreen().then(() => {
                // Hide timer when exiting fullscreen
                const timer = document.getElementById('presentation-timer');
                if (timer) {
                    timer.style.display = 'none';
                    if (timer.dataset.interval) {
                        clearInterval(parseInt(timer.dataset.interval));
                    }
                }
            });
        }
    }
}

// Enhanced accessibility features
class SlideshowA11y {
    constructor(slideshow) {
        this.slideshow = slideshow;
        this.init();
    }

    init() {
        this.addAriaLabels();
        this.addLiveRegion();
        this.addSkipLinks();
        this.addKeyboardHelp();
    }

    addAriaLabels() {
        // Add ARIA labels to navigation buttons
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const indexBtn = document.getElementById('index-btn');

        if (prevBtn) {
            prevBtn.setAttribute('aria-label', 'Ir a la diapositiva anterior');
            prevBtn.setAttribute('title', 'Diapositiva anterior (Flecha izquierda)');
        }
        if (nextBtn) {
            nextBtn.setAttribute('aria-label', 'Ir a la siguiente diapositiva');
            nextBtn.setAttribute('title', 'Siguiente diapositiva (Flecha derecha o Espacio)');
        }
        if (indexBtn) {
            indexBtn.setAttribute('aria-label', 'Mostrar índice de contenidos');
            indexBtn.setAttribute('title', 'Abrir índice de navegación');
        }

        // Add ARIA labels to slides
        document.querySelectorAll('.slide').forEach((slide, index) => {
            slide.setAttribute('role', 'tabpanel');
            slide.setAttribute('aria-labelledby', `slide-${index + 1}-title`);
            
            // Add ID to slide titles for aria-labelledby
            const titleElement = slide.querySelector('h1, h2');
            if (titleElement) {
                titleElement.id = `slide-${index + 1}-title`;
            }
        });

        // Add role to slideshow container
        const slidesWrapper = document.querySelector('.slides-wrapper');
        if (slidesWrapper) {
            slidesWrapper.setAttribute('role', 'tablist');
            slidesWrapper.setAttribute('aria-label', 'Presentación HTML');
        }
    }

    addLiveRegion() {
        // Create live region for screen reader announcements
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        liveRegion.id = 'slide-announcements';
        document.body.appendChild(liveRegion);

        // Initial announcement
        liveRegion.textContent = 'Presentación cargada. Use las flechas del teclado para navegar.';
    }

    addSkipLinks() {
        // Add skip to content link
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.textContent = 'Saltar al contenido principal';
        skipLink.className = 'skip-link';
        skipLink.style.cssText = `
            position: absolute;
            top: -40px;
            left: 6px;
            background: #2563eb;
            color: white;
            padding: 8px;
            text-decoration: none;
            border-radius: 4px;
            z-index: 1000;
        `;
        
        skipLink.addEventListener('focus', () => {
            skipLink.style.top = '6px';
        });
        
        skipLink.addEventListener('blur', () => {
            skipLink.style.top = '-40px';
        });
        
        document.body.insertBefore(skipLink, document.body.firstChild);

        // Add main content ID
        const slidesWrapper = document.querySelector('.slides-wrapper');
        if (slidesWrapper) {
            slidesWrapper.id = 'main-content';
        }
    }

    addKeyboardHelp() {
        // Add keyboard shortcuts help
        const helpButton = document.createElement('button');
        helpButton.textContent = '?';
        helpButton.className = 'btn btn--outline';
        helpButton.title = 'Mostrar atajos de teclado';
        helpButton.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            font-size: 18px;
            font-weight: bold;
            z-index: 1000;
        `;

        helpButton.addEventListener('click', (e) => {
            e.preventDefault();
            this.showKeyboardHelp();
        });
        document.body.appendChild(helpButton);
    }

    showKeyboardHelp() {
        const helpModal = document.createElement('div');
        helpModal.className = 'modal';
        helpModal.style.display = 'flex';
        helpModal.innerHTML = `
            <div style="background: white; padding: 24px; border-radius: 8px; max-width: 400px; border: 3px solid #374151;">
                <h3 style="color: #1a365d; margin-top: 0;">Atajos de Teclado</h3>
                <ul style="list-style: none; padding: 0;">
                    <li style="margin-bottom: 8px; color: #000;"><strong>← →</strong> Navegar diapositivas</li>
                    <li style="margin-bottom: 8px; color: #000;"><strong>Espacio</strong> Siguiente diapositiva</li>
                    <li style="margin-bottom: 8px; color: #000;"><strong>Backspace</strong> Diapositiva anterior</li>
                    <li style="margin-bottom: 8px; color: #000;"><strong>Home</strong> Primera diapositiva</li>
                    <li style="margin-bottom: 8px; color: #000;"><strong>End</strong> Última diapositiva</li>
                    <li style="margin-bottom: 8px; color: #000;"><strong>Escape</strong> Cerrar modal</li>
                </ul>
                <button class="btn btn--primary" style="margin-top: 16px;">Cerrar</button>
            </div>
        `;

        const closeBtn = helpModal.querySelector('button');
        closeBtn.addEventListener('click', () => {
            helpModal.remove();
        });

        helpModal.addEventListener('click', (e) => {
            if (e.target === helpModal) {
                helpModal.remove();
            }
        });

        document.body.appendChild(helpModal);
    }
}

// Initialize slideshow when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    try {
        console.log('🚀 Iniciando presentación HTML optimizada para proyección...');
        
        // Wait a bit for all elements to be ready
        setTimeout(() => {            
            // Create main slideshow instance
            const slideshow = new HTMLSlideshow();
            
            // Add enhancements
            const enhancer = new SlideshowEnhancer(slideshow);
            const a11y = new SlideshowA11y(slideshow);
            
            // Make slideshow globally available for debugging and external control
            window.htmlSlideshow = slideshow;
            window.slideshowEnhancer = enhancer;
            
            // Add helpful console messages
            console.log('📚 Guía Completa de HTML - Presentación OPTIMIZADA cargada');
            console.log('🎮 Controles disponibles:');
            console.log('  • Flechas ← → para navegar');
            console.log('  • Espacio para siguiente, Backspace para anterior');
            console.log('  • Home/End para ir al inicio/final');
            console.log('  • Botones Anterior/Siguiente');
            console.log('  • Botón Índice para navegación rápida');
            console.log('  • Deslizar en móvil');
            console.log('  • Escape para cerrar modal');
            console.log('  • ? para ayuda de teclado');
            console.log('🎯 OPTIMIZADA PARA PROYECCIÓN:');
            console.log('  • Colores de alto contraste');
            console.log('  • Texto más grande y legible');
            console.log('  • Fondos claros y bordes definidos');
            console.log('  • Sombras visibles para separación');
            
            // Verify initial state
            console.log(`✅ Estado inicial: Slide ${slideshow.getCurrentSlide()} de ${slideshow.getTotalSlides()}`);
            
            // Add presentation tips
            console.log('💡 Consejos para presentación:');
            console.log('  • Use ⛶ Pantalla Completa para presentar');
            console.log('  • El temporizador se activa en modo fullscreen');
            console.log('  • Todas las etiquetas y ejemplos están optimizados');
            console.log('  • Navegación accesible para todos los usuarios');
        }, 100);
        
    } catch (error) {
        console.error('❌ Error al inicializar la presentación:', error);
    }
});

// Handle any initialization errors gracefully
window.addEventListener('error', (event) => {
    console.warn('⚠️ Error en la presentación:', event.error);
    // Ensure basic functionality works even if enhancements fail
    if (!window.htmlSlideshow) {
        console.log('🔧 Iniciando modo básico de presentación...');
        try {
            window.htmlSlideshow = new HTMLSlideshow();
        } catch (fallbackError) {
            console.error('❌ Error crítico al inicializar modo básico:', fallbackError);
        }
    }
});

// Handle fullscreen changes
document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement) {
        console.log('🖥️ Modo presentación activado');
        document.body.classList.add('fullscreen-mode');
    } else {
        console.log('🖥️ Modo presentación desactivado');
        document.body.classList.remove('fullscreen-mode');
    }
});

// Add some presentation utilities
window.presentationUtils = {
    goToSection: (section) => {
        if (window.htmlSlideshow) {
            window.htmlSlideshow.goToSection(section);
        }
    },
    toggleFullscreen: () => {
        if (window.slideshowEnhancer) {
            window.slideshowEnhancer.toggleFullscreen();
        }
    },
    getCurrentSlideInfo: () => {
        if (window.htmlSlideshow) {
            const current = window.htmlSlideshow.getCurrentSlide();
            const total = window.htmlSlideshow.getTotalSlides();
            const currentSlideElement = document.querySelector(`[data-slide="${current}"]`);
            const title = currentSlideElement?.querySelector('h1, h2')?.textContent || 'Sin título';
            return { current, total, title };
        }
        return null;
    }
};

// Performance monitoring for projector environments
window.addEventListener('load', () => {
    // Check if all critical resources loaded properly
    const criticalElements = [
        '.slideshow-container',
        '.slide',
        '.slideshow-controls',
        '.btn'
    ];

    let allLoaded = true;
    criticalElements.forEach(selector => {
        if (!document.querySelector(selector)) {
            console.error(`❌ Elemento crítico no cargado: ${selector}`);
            allLoaded = false;
        }
    });

    if (allLoaded) {
        console.log('✅ Todos los elementos críticos cargados correctamente');
        console.log('🎯 Presentación lista para proyección en salones');
    }

    // Report performance metrics
    if (performance && performance.now) {
        console.log(`⚡ Tiempo de carga: ${Math.round(performance.now())}ms`);
    }
});