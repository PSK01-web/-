// 온애정 추어탕 V3 JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initSmoothScroll();
    initCTAButtons();
    initSVGAnimations();
    initPowderAnimation();
});

// 스크롤 애니메이션
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const elements = document.querySelectorAll(`
        .problem-content,
        .aging-graph,
        .paper-box,
        .core-system-diagram,
        .step-detail-card,
        .tech-card,
        .fact-check-box,
        .ingredient-receipt,
        .certification-section
    `);

    elements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
}

// 스무스 스크롤
function initSmoothScroll() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const problemSection = document.querySelector('.problem-section');
            if (problemSection) {
                problemSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }
}

// CTA 버튼 이벤트
function initCTAButtons() {
    const buttons = document.querySelectorAll('.cta-button-main, .cta-button-secondary');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            showNotification('온애정 추어탕에 관심 가져주셔서 감사합니다! 🌿');
        });
    });
}

// 알림 표시
function showNotification(message) {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #2D5A3D 0%, #5A8B6F 100%);
        color: white;
        padding: 20px 40px;
        border-radius: 50px;
        box-shadow: 0 10px 30px rgba(45, 90, 61, 0.4);
        font-size: 1.1rem;
        font-weight: 600;
        z-index: 10000;
        animation: slideDown 0.5s ease, slideUp 0.5s ease 2.5s;
    `;
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideDown {
            from { opacity: 0; transform: translateX(-50%) translateY(-20px); }
            to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        @keyframes slideUp {
            from { opacity: 1; transform: translateX(-50%) translateY(0); }
            to { opacity: 0; transform: translateX(-50%) translateY(-20px); }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 3000);
}

// SVG 애니메이션 트리거
function initSVGAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const svg = entry.target.querySelector('svg');
                if (svg) {
                    const animations = svg.querySelectorAll('animate');
                    animations.forEach(anim => anim.beginElement());
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    const diagrams = document.querySelectorAll('.core-system-diagram, .aging-graph');
    diagrams.forEach(diagram => observer.observe(diagram));
}

// 가루 애니메이션
function initPowderAnimation() {
    const powderContainer = document.querySelector('.powder-animation');
    if (!powderContainer) return;
    
    const particles = powderContainer.querySelectorAll('.powder-particle');
    particles.forEach((particle, index) => {
        particle.style.cssText = `
            position: absolute;
            width: 8px;
            height: 8px;
            background: radial-gradient(circle, #C4A57B 0%, #8B7355 100%);
            border-radius: 50%;
            animation: float ${2 + index * 0.3}s ease-in-out infinite;
            animation-delay: ${index * 0.2}s;
            left: ${20 + index * 15}%;
            top: 50%;
        `;
    });
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0) scale(1); opacity: 0.8; }
            50% { transform: translateY(-30px) scale(1.2); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

// 스크롤 진행률 바
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, #2D5A3D 0%, #C4A57B 100%);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

initScrollProgress();

// 페이지 로드 완료
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => { document.body.style.opacity = '1'; }, 100);
    
    console.log('🌿 온애정 추어탕 V3 로드 완료');
    console.log('✨ Core Warming System™');
});
