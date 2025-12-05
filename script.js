// 온애정 추어탕 상세페이지 JavaScript

// DOM이 로드되면 실행
document.addEventListener('DOMContentLoaded', function() {
    // 스크롤 애니메이션 초기화
    initScrollAnimations();
    
    // 스무스 스크롤 설정
    initSmoothScroll();
    
    // CTA 버튼 이벤트
    initCTAButton();
    
    // 논문 박스 호버 효과
    initPaperBoxEffects();
    
    // 성분 아이템 호버 효과
    initIngredientHover();
});

// 스크롤 애니메이션 초기화
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // 한 번만 애니메이션 실행 후 관찰 중지
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 애니메이션할 요소들 선택
    const animatedElements = document.querySelectorAll(`
        .content-block,
        .mechanism-diagram,
        .paper-box,
        .solution-step,
        .powder-tech,
        .comparison-item,
        .ingredient-breakdown,
        .transparency-message,
        .habit-box,
        .reference-category
    `);

    animatedElements.forEach(element => {
        element.classList.add('animate-on-scroll');
        observer.observe(element);
    });
}

// 스무스 스크롤
function initSmoothScroll() {
    // 스크롤 인디케이터 클릭
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const healthSection = document.querySelector('.health-info-section');
            if (healthSection) {
                healthSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

// CTA 버튼 이벤트
function initCTAButton() {
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // 구매 페이지로 이동하거나 모달 열기 등의 동작
            // 여기서는 알림 표시
            showNotification('온애정 추어탕에 관심 가져주셔서 감사합니다! 🔥');
            
            // 실제로는 구매 페이지로 이동
            // window.location.href = '/purchase';
        });
        
        // 버튼 호버 시 파티클 효과
        ctaButton.addEventListener('mouseenter', function(e) {
            createParticles(e);
        });
    }
}

// 알림 표시 함수
function showNotification(message) {
    // 기존 알림이 있으면 제거
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // 새 알림 생성
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #FF6F00 0%, #D84315 100%);
        color: white;
        padding: 20px 40px;
        border-radius: 50px;
        box-shadow: 0 10px 30px rgba(216, 67, 21, 0.4);
        font-size: 1.1rem;
        font-weight: 600;
        z-index: 10000;
        animation: slideDown 0.5s ease, slideUp 0.5s ease 2.5s;
    `;
    
    // 애니메이션 추가
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateX(-50%) translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
        }
        @keyframes slideUp {
            from {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
            to {
                opacity: 0;
                transform: translateX(-50%) translateY(-20px);
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // 3초 후 제거
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// 파티클 효과 생성
function createParticles(event) {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: #FFB74D;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            left: ${rect.left + rect.width / 2}px;
            top: ${rect.top + rect.height / 2}px;
        `;
        
        document.body.appendChild(particle);
        
        // 랜덤 방향으로 애니메이션
        const angle = (Math.PI * 2 * i) / 5;
        const velocity = 50 + Math.random() * 50;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        let x = 0, y = 0;
        let opacity = 1;
        
        const animate = () => {
            x += vx * 0.05;
            y += vy * 0.05;
            opacity -= 0.02;
            
            particle.style.transform = `translate(${x}px, ${y}px)`;
            particle.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };
        
        animate();
    }
}

// 논문 박스 호버 효과
function initPaperBoxEffects() {
    const paperBoxes = document.querySelectorAll('.paper-box, .mini-paper-box');
    
    paperBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 12px 32px rgba(0,0,0,0.15)';
            this.style.transition = 'all 0.3s ease';
        });
        
        box.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        });
    });
}

// 성분 아이템 호버 효과
function initIngredientHover() {
    const ingredientItems = document.querySelectorAll('.powder-item, .step-circle');
    
    ingredientItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
            
            // 파동 효과
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                border-radius: inherit;
                border: 2px solid #FFB74D;
                animation: ripple 1s ease-out;
                pointer-events: none;
            `;
            
            const rippleStyle = document.createElement('style');
            rippleStyle.textContent = `
                @keyframes ripple {
                    0% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(1.5);
                        opacity: 0;
                    }
                }
            `;
            
            if (!document.querySelector('style[data-ripple]')) {
                rippleStyle.setAttribute('data-ripple', 'true');
                document.head.appendChild(rippleStyle);
            }
            
            const parent = this;
            const originalPosition = parent.style.position;
            parent.style.position = 'relative';
            parent.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
                if (!originalPosition) {
                    parent.style.position = '';
                }
            }, 1000);
        });
    });
}

// 온기 게이지 애니메이션 (추가 인터랙션)
function initWarmthGauge() {
    const stepCircles = document.querySelectorAll('.step-circle');
    
    // 스크롤에 따라 온기 게이지 채우기
    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        
        stepCircles.forEach((circle, index) => {
            const rect = circle.getBoundingClientRect();
            const circleTop = rect.top;
            
            if (circleTop < windowHeight * 0.8) {
                setTimeout(() => {
                    circle.style.animation = 'warmthFill 0.8s ease forwards';
                }, index * 200);
            }
        });
    });
    
    // 온기 채우기 애니메이션 스타일 추가
    const warmthStyle = document.createElement('style');
    warmthStyle.textContent = `
        @keyframes warmthFill {
            0% {
                box-shadow: 0 8px 20px rgba(216, 67, 21, 0.3);
            }
            50% {
                box-shadow: 0 8px 30px rgba(216, 67, 21, 0.6);
                transform: scale(1.05);
            }
            100% {
                box-shadow: 0 8px 20px rgba(216, 67, 21, 0.3);
                transform: scale(1);
            }
        }
    `;
    document.head.appendChild(warmthStyle);
}

// 온기 게이지 초기화 실행
initWarmthGauge();

// 스크롤 진행률 표시
function initScrollProgress() {
    // 스크롤 진행률 바 생성
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, #FF6F00 0%, #D84315 100%);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    // 스크롤 이벤트
    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// 스크롤 진행률 초기화
initScrollProgress();

// 섹션 나타날 때 카운터 애니메이션
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

// 논문 인용 횟수 카운터 애니메이션
function initCitationCounters() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const text = element.textContent;
                const match = text.match(/(\d+)회/);
                
                if (match) {
                    const target = parseInt(match[1]);
                    const prefix = text.split(match[0])[0];
                    const suffix = '회)';
                    
                    let current = 0;
                    const duration = 1500;
                    const increment = target / (duration / 16);
                    
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            element.textContent = prefix + target.toLocaleString() + suffix;
                            clearInterval(timer);
                        } else {
                            element.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
                        }
                    }, 16);
                    
                    observer.unobserve(element);
                }
            }
        });
    }, { threshold: 0.5 });
    
    // 인용 횟수가 있는 모든 요소 관찰
    const citationElements = document.querySelectorAll('.ref-text, .mini-reference, .reference-list em');
    citationElements.forEach(el => {
        if (el.textContent.includes('인용') && el.textContent.includes('회')) {
            observer.observe(el);
        }
    });
}

// 인용 카운터 초기화
initCitationCounters();

// 패러럭스 효과
function initParallax() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        // 인트로 섹션 패러럭스
        const introContent = document.querySelector('.intro-content');
        if (introContent) {
            introContent.style.transform = `translateY(${scrolled * 0.5}px)`;
            introContent.style.opacity = 1 - (scrolled / 700);
        }
        
        // 스팀 효과 패러럭스
        const steamEffect = document.querySelector('.steam-effect');
        if (steamEffect) {
            steamEffect.style.transform = `translateX(-50%) translateY(${-scrolled * 0.3}px)`;
        }
    });
}

// 패러럭스 초기화
initParallax();

// 3단계 다이어그램 순차 애니메이션
function initStepAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const steps = entry.target.querySelectorAll('.step-item');
                steps.forEach((step, index) => {
                    setTimeout(() => {
                        step.style.animation = 'stepAppear 0.6s ease forwards';
                    }, index * 300);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    const diagram = document.querySelector('.three-steps');
    if (diagram) {
        observer.observe(diagram);
    }
}

// 스텝 애니메이션 초기화
initStepAnimation();

// 비교 테이블 강조 효과
function initComparisonHighlight() {
    const goodComparison = document.querySelector('.comparison-item.after');
    
    if (goodComparison) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // 강조 효과
                    entry.target.style.animation = 'highlight 2s ease-in-out';
                    
                    const highlightStyle = document.createElement('style');
                    highlightStyle.textContent = `
                        @keyframes highlight {
                            0%, 100% {
                                box-shadow: 0 4px 16px rgba(0,0,0,0.12);
                            }
                            50% {
                                box-shadow: 0 8px 32px rgba(76, 175, 80, 0.4);
                            }
                        }
                    `;
                    
                    if (!document.querySelector('style[data-highlight]')) {
                        highlightStyle.setAttribute('data-highlight', 'true');
                        document.head.appendChild(highlightStyle);
                    }
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(goodComparison);
    }
}

// 비교 하이라이트 초기화
initComparisonHighlight();

// 터치 디바이스 감지 및 최적화
function initTouchOptimization() {
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
        
        // 터치 디바이스용 스타일 추가
        const touchStyle = document.createElement('style');
        touchStyle.textContent = `
            .touch-device .solution-step:hover,
            .touch-device .powder-item:hover,
            .touch-device .step-circle:hover {
                transform: none;
            }
            
            .touch-device .solution-step:active {
                transform: translateY(-5px);
            }
        `;
        document.head.appendChild(touchStyle);
    }
}

// 터치 최적화 초기화
initTouchOptimization();

// 페이지 로드 완료 시 실행
window.addEventListener('load', function() {
    // 로딩 완료 후 부드럽게 나타나기
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    console.log('🔥 온애정 추어탕 상세페이지 로드 완료');
    console.log('📚 총 12편의 논문 인용 (총 인용 횟수: 9,068회)');
});

// 성능 모니터링 (개발용)
if (window.performance && window.performance.timing) {
    window.addEventListener('load', function() {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ 페이지 로드 시간: ${pageLoadTime}ms`);
    });
}
