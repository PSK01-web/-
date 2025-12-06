// ================================================================
// 온애정 추어탕 - Golden Hour Warmth
// Interactive JavaScript
// ================================================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🌅 Golden Hour Warmth 로드 완료');
    
    // Initialize all features
    initScrollProgress();
    initScrollAnimations();
    initSmoothScroll();
    initCTAButtons();
    initFloatingParticles();
    
    // Page load animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.8s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ----------------------------------------------------------------
// 1. Scroll Progress Bar
// ----------------------------------------------------------------
function initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress');
    
    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
        progressBar.style.width = `${scrollPercentage}%`;
    });
}

// ----------------------------------------------------------------
// 2. Scroll Animations (Intersection Observer)
// ----------------------------------------------------------------
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Apply animations to various elements
    const animatedElements = [
        '.problem-content',
        '.problem-visual',
        '.step-card',
        '.tech-card',
        '.result-card',
        '.cert-badge',
        '.benefit-item',
        '.safety-main-message',
        '.safety-check-box',
        '.ingredient-receipt'
    ];
    
    animatedElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
            // Add fade-in class
            element.classList.add('fade-in');
            
            // Stagger animation delay
            element.style.transitionDelay = `${index * 0.1}s`;
            
            // Observe element
            observer.observe(element);
        });
    });
    
    // Special animations for problem items
    const problemItems = document.querySelectorAll('.problem-item');
    problemItems.forEach((item, index) => {
        item.classList.add('slide-in-left');
        item.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(item);
    });
    
    // Special animations for feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(card);
    });
}

// ----------------------------------------------------------------
// 3. Smooth Scroll
// ----------------------------------------------------------------
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed header if any
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ----------------------------------------------------------------
// 4. CTA Button Interactions
// ----------------------------------------------------------------
function initCTAButtons() {
    const ctaButtons = document.querySelectorAll('.intro-cta, .outro-cta');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Add click animation
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = '';
            }, 200);
            
            // Show notification (you can replace this with actual purchase flow)
            showNotification('온애정 추어탕 구매하기 준비 중입니다 ✨');
        });
    });
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.8);
        background: linear-gradient(135deg, #D97742, #E8956F);
        color: white;
        padding: 25px 40px;
        border-radius: 15px;
        font-size: 1.2rem;
        font-weight: 700;
        z-index: 10000;
        box-shadow: 0 20px 60px rgba(0,0,0,0.4);
        opacity: 0;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 10);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translate(-50%, -50%) scale(0.8)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2500);
}

// ----------------------------------------------------------------
// 5. Floating Particles (Golden Hour Effect)
// ----------------------------------------------------------------
function initFloatingParticles() {
    const sections = [
        document.querySelector('.intro-section'),
        document.querySelector('.solution-section'),
        document.querySelector('.outro-section')
    ];
    
    sections.forEach(section => {
        if (!section) return;
        
        // Create particle container
        const particleContainer = document.createElement('div');
        particleContainer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            overflow: hidden;
            z-index: 1;
        `;
        
        section.style.position = 'relative';
        section.insertBefore(particleContainer, section.firstChild);
        
        // Create particles
        const particleCount = 20;
        for (let i = 0; i < particleCount; i++) {
            createParticle(particleContainer);
        }
    });
}

function createParticle(container) {
    const particle = document.createElement('div');
    const size = Math.random() * 4 + 2;
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const duration = Math.random() * 20 + 15;
    const delay = Math.random() * 5;
    
    // Golden hour particle colors
    const colors = [
        'rgba(244,224,200,0.6)',
        'rgba(217,119,66,0.5)',
        'rgba(196,181,160,0.6)',
        'rgba(232,149,111,0.5)'
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        left: ${startX}%;
        top: ${startY}%;
        opacity: 0;
        animation: float-particle ${duration}s ease-in-out infinite;
        animation-delay: ${delay}s;
        box-shadow: 0 0 10px ${color};
    `;
    
    container.appendChild(particle);
}

// Add CSS animation for particles
const style = document.createElement('style');
style.textContent = `
    @keyframes float-particle {
        0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ----------------------------------------------------------------
// 6. Dynamic Flow Circle Animations
// ----------------------------------------------------------------
function initFlowCircleAnimations() {
    const flowCircles = document.querySelectorAll('.flow-circle');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'circle-pulse 2s ease-in-out infinite';
            }
        });
    }, { threshold: 0.5 });
    
    flowCircles.forEach(circle => observer.observe(circle));
}

// Add circle pulse animation
const circlePulseStyle = document.createElement('style');
circlePulseStyle.textContent = `
    @keyframes circle-pulse {
        0%, 100% {
            transform: scale(1);
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        50% {
            transform: scale(1.05);
            box-shadow: 0 15px 40px rgba(217,119,66,0.4);
        }
    }
`;
document.head.appendChild(circlePulseStyle);

// Initialize after DOM loaded
document.addEventListener('DOMContentLoaded', () => {
    initFlowCircleAnimations();
});

// ----------------------------------------------------------------
// 7. Safety Badge Glow Effect
// ----------------------------------------------------------------
function initSafetyBadgeGlow() {
    const safetyBadge = document.querySelector('.safety-badge-large');
    
    if (safetyBadge) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    safetyBadge.style.animation = 'badge-glow 3s ease-in-out infinite';
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(safetyBadge);
    }
}

// Add badge glow animation
const badgeGlowStyle = document.createElement('style');
badgeGlowStyle.textContent = `
    @keyframes badge-glow {
        0%, 100% {
            box-shadow: 0 10px 40px rgba(0,0,0,0.15);
        }
        50% {
            box-shadow: 0 15px 50px rgba(217,119,66,0.3), 0 0 30px rgba(217,119,66,0.2);
        }
    }
`;
document.head.appendChild(badgeGlowStyle);

// Initialize after DOM loaded
document.addEventListener('DOMContentLoaded', () => {
    initSafetyBadgeGlow();
});

// ----------------------------------------------------------------
// 8. Ingredient Item Hover Effects
// ----------------------------------------------------------------
function initIngredientHoverEffects() {
    const ingredientItems = document.querySelectorAll('.ingredient-item');
    
    ingredientItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
            this.style.transform = 'scale(1.08) rotate(2deg)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

// Initialize after DOM loaded
document.addEventListener('DOMContentLoaded', () => {
    initIngredientHoverEffects();
});

// ----------------------------------------------------------------
// 9. Console Log Branding
// ----------------------------------------------------------------
console.log('%c🌅 Golden Hour Warmth', 'font-size: 24px; font-weight: bold; color: #D97742;');
console.log('%c온애정 추어탕 - 몸의 온기를 채우는 가장 따뜻한 시간', 'font-size: 14px; color: #4A3829;');
console.log('%cCinematic Premium Design by Genspark AI', 'font-size: 12px; color: #C4B5A0; font-style: italic;');
