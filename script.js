// ===== CYBER_STOP - SCRIPT PRINCIPAL =====
// Desenvolvedor: Cyber_Stop Team
// Versão: 1.0.0
// Data: 2024

// ===== VARIÁVEIS GLOBAIS =====
let currentSlide = 0;
let isMenuOpen = false;
let isMusicPlaying = false;
let currentTheme = 'dark';

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Cyber_Stop iniciando...');
    
    initializeApp();
    setupEventListeners();
    loadTheme();
    startParticleAnimation();
});

// ===== FUNÇÃO PRINCIPAL DE INICIALIZAÇÃO =====
function initializeApp() {
    // Inicializar componentes
    initializeNavigation();
    initializeCarousel();
    initializeModals();
    initializeForms();
    initializeAnimations();
    initializeCountdown();
    
    // Carregar dados simulados
    loadSimulatedData();
    
    console.log('✅ Cyber_Stop inicializado com sucesso!');
}

// ===== CONFIGURAÇÃO DE EVENT LISTENERS =====
function setupEventListeners() {
    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Header transparente no scroll
    window.addEventListener('scroll', handleScroll);
    
    // Teclas de atalho
    document.addEventListener('keydown', handleKeyboardShortcuts);
    
    // Resize da janela
    window.addEventListener('resize', handleResize);
}

// ===== NAVEGAÇÃO =====
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
    
    // Fechar menu ao clicar em links
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                closeMobileMenu();
            }
        });
    });
}

function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        navMenu.classList.add('active');
        hamburger.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        closeMobileMenu();
    }
}

function closeMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
    isMenuOpen = false;
}

// ===== HEADER SCROLL EFFECT =====
function handleScroll() {
    const header = document.querySelector('.header');
    const scrollTop = window.pageYOffset;
    
    if (scrollTop > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Parallax para elementos
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrollTop * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
}

// ===== CARROSSEL DE IMAGENS =====
function initializeCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    
    if (slides.length === 0) return;
    
    // Criar indicadores
    createCarouselDots(slides);
    
    // Event listeners para botões
    if (prevBtn) prevBtn.addEventListener('click', () => changeSlide(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => changeSlide(1));
    
    // Auto-play
    setInterval(() => changeSlide(1), 5000);
    
    // Touch/swipe para mobile
    let startX = 0;
    let endX = 0;
    
    const carousel = document.querySelector('.carousel-container');
    if (carousel) {
        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        carousel.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        });
    }
}

function createCarouselDots(slides) {
    const dotsContainer = document.querySelector('.carousel-dots');
    if (!dotsContainer) return;
    
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
}

function changeSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    
    if (slides.length === 0) return;
    
    slides[currentSlide].classList.remove('active');
    if (dots[currentSlide]) dots[currentSlide].classList.remove('active');
    
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) dots[currentSlide].classList.add('active');
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    
    if (index < 0 || index >= slides.length) return;
    
    slides[currentSlide].classList.remove('active');
    if (dots[currentSlide]) dots[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) dots[currentSlide].classList.add('active');
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = startX - endX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            changeSlide(1); // Swipe left
        } else {
            changeSlide(-1); // Swipe right
        }
    }
}

// ===== MODAIS =====
function initializeModals() {
    // Modal de login
    const loginModal = document.getElementById('login');
    const loginLinks = document.querySelectorAll('a[href="#login"]');
    const closeBtn = document.querySelector('.close');
    
    loginLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(loginModal);
        });
    });
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => closeModal(loginModal));
    }
    
    // Fechar modal ao clicar fora
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            closeModal(e.target);
        }
    });
    
    // Fechar com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const openModal = document.querySelector('.modal[style*="display: block"]');
            if (openModal) closeModal(openModal);
        }
    });
}

function openModal(modal) {
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Animação de entrada
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }
}

function closeModal(modal) {
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }, 300);
    }
}

// ===== FORMULÁRIOS =====
function initializeForms() {
    // Formulário de cartão
    const cartaoForm = document.getElementById('cartaoForm');
    if (cartaoForm) {
        cartaoForm.addEventListener('submit', handleCartaoSubmit);
    }
    
    // Formulário de login
    const loginForm = document.querySelector('.login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLoginSubmit);
    }
    
    // Validação em tempo real
    setupFormValidation();
}

function handleCartaoSubmit(e) {
    e.preventDefault();
    
    if (validateForm(e.target)) {
        showNotification('✅ Cartão solicitado com sucesso! Em breve entraremos em contato.', 'success');
        
        // Simular envio
        const submitBtn = e.target.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            e.target.reset();
        }, 2000);
    }
}

function handleLoginSubmit(e) {
    e.preventDefault();
    
    const email = e.target.querySelector('#loginEmail').value;
    const senha = e.target.querySelector('#loginSenha').value;
    
    if (email && senha) {
        // Simular login
        showNotification('🔐 Login realizado com sucesso!', 'success');
        
        setTimeout(() => {
            closeModal(document.getElementById('login'));
            // Aqui você redirecionaria para a área do cliente
            showNotification('🚀 Redirecionando para área do cliente...', 'info');
        }, 1000);
    }
}

function setupFormValidation() {
    const inputs = document.querySelectorAll('input, select, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Validações específicas
    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMessage = 'Este campo é obrigatório';
    } else if (field.type === 'email' && value && !isValidEmail(value)) {
        isValid = false;
        errorMessage = 'E-mail inválido';
    } else if (field.id === 'cpf' && value && !isValidCPF(value)) {
        isValid = false;
        errorMessage = 'CPF inválido';
    } else if (field.id === 'telefone' && value && !isValidPhone(value)) {
        isValid = false;
        errorMessage = 'Telefone inválido';
    }
    
    if (!isValid) {
        showFieldError(field, errorMessage);
    } else {
        clearFieldError({ target: field });
    }
    
    return isValid;
}

function validateForm(form) {
    const fields = form.querySelectorAll('input, select, textarea');
    let isValid = true;
    
    fields.forEach(field => {
        if (!validateField({ target: field })) {
            isValid = false;
        }
    });
    
    return isValid;
}

function showFieldError(field, message) {
    clearFieldError({ target: field });
    
    field.classList.add('error');
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.color = '#ff0080';
    errorDiv.style.fontSize = '0.8rem';
    errorDiv.style.marginTop = '0.25rem';
    
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(e) {
    const field = e.target;
    field.classList.remove('error');
    
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
}

// ===== VALIDAÇÕES =====
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidCPF(cpf) {
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return cpfRegex.test(cpf);
}

function isValidPhone(phone) {
    const phoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    return phoneRegex.test(phone);
}

// ===== ANIMAÇÕES =====
function initializeAnimations() {
    // Intersection Observer para animações
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observar elementos animáveis
    document.querySelectorAll('.feature, .plano, .evento, .jogo-item').forEach(el => {
        observer.observe(el);
    });
    
    // Efeitos de hover
    setupHoverEffects();
}

function setupHoverEffects() {
    // Efeito de partículas nos botões
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', createParticles);
        btn.addEventListener('mouseleave', removeParticles);
    });
    
    // Efeito de glow nos cards
    document.querySelectorAll('.feature, .plano, .evento').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// ===== SISTEMA DE PARTÍCULAS =====
function startParticleAnimation() {
    createParticleBackground();
}

function createParticleBackground() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        overflow: hidden;
    `;
    
    document.body.appendChild(particleContainer);
    
    // Criar partículas
    for (let i = 0; i < 50; i++) {
        createParticle(particleContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: var(--primary-cyan);
        border-radius: 50%;
        opacity: 0.3;
        animation: float 20s infinite linear;
    `;
    
    // Posição aleatória
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.animationDuration = (15 + Math.random() * 10) + 's';
    
    container.appendChild(particle);
}

function createParticles(e) {
    const btn = e.target;
    const rect = btn.getBoundingClientRect();
    
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.className = 'btn-particle';
        particle.style.cssText = `
            position: fixed;
            left: ${rect.left + rect.width / 2}px;
            top: ${rect.top + rect.height / 2}px;
            width: 4px;
            height: 4px;
            background: var(--primary-cyan);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            animation: particleExplosion 0.6s ease-out forwards;
        `;
        
        // Direção aleatória
        const angle = (Math.PI * 2 * i) / 5;
        const velocity = 50 + Math.random() * 50;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        particle.style.setProperty('--vx', vx + 'px');
        particle.style.setProperty('--vy', vy + 'px');
        
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 600);
    }
}

function removeParticles(e) {
    // As partículas se removem automaticamente
}

// ===== CONTADOR REGRESSIVO =====
function initializeCountdown() {
    // Próximo evento (exemplo)
    const nextEvent = new Date();
    nextEvent.setDate(nextEvent.getDate() + 7); // 7 dias a partir de hoje
    
    updateCountdown(nextEvent);
    setInterval(() => updateCountdown(nextEvent), 1000);
}

function updateCountdown(eventDate) {
    const now = new Date().getTime();
    const distance = eventDate.getTime() - now;
    
    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Atualizar elementos de contador se existirem
        const countdownElements = document.querySelectorAll('.countdown-item');
        countdownElements.forEach((el, index) => {
            const value = [days, hours, minutes, seconds][index];
            if (el.querySelector('.countdown-value')) {
                el.querySelector('.countdown-value').textContent = value.toString().padStart(2, '0');
            }
        });
    }
}

// ===== DADOS SIMULADOS =====
function loadSimulatedData() {
    // Simular carregamento de dados
    console.log('📊 Carregando dados simulados...');
    
    // Simular API calls
    setTimeout(() => {
        console.log('✅ Dados carregados com sucesso!');
    }, 1000);
}

// ===== NOTIFICAÇÕES =====
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--bg-card);
        color: var(--text-primary);
        padding: 1rem 1.5rem;
        border-radius: 10px;
        border-left: 4px solid var(--primary-cyan);
        box-shadow: var(--glow-cyan);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    if (type === 'success') {
        notification.style.borderLeftColor = '#00ff80';
        notification.style.boxShadow = '0 0 20px rgba(0, 255, 128, 0.5)';
    } else if (type === 'error') {
        notification.style.borderLeftColor = '#ff0080';
        notification.style.boxShadow = '0 0 20px rgba(255, 0, 128, 0.5)';
    }
    
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto-remover
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// ===== TEMA CLARO/ESCURO =====
function loadTheme() {
    const savedTheme = localStorage.getItem('cyberstop-theme') || 'dark';
    setTheme(savedTheme);
}

function toggleTheme() {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('cyberstop-theme', theme);
    
    // Atualizar ícone se existir
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.innerHTML = theme === 'dark' ? 
            '<i class="fas fa-sun"></i>' : 
            '<i class="fas fa-moon"></i>';
    }
}

// ===== ATALHOS DE TECLADO =====
function handleKeyboardShortcuts(e) {
    // Ctrl/Cmd + K para busca
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // Implementar busca
        showNotification('🔍 Funcionalidade de busca em desenvolvimento', 'info');
    }
    
    // Ctrl/Cmd + M para tema
    if ((e.ctrlKey || e.metaKey) && e.key === 'm') {
        e.preventDefault();
        toggleTheme();
    }
    
    // ESC para fechar modais
    if (e.key === 'Escape') {
        const openModal = document.querySelector('.modal[style*="display: block"]');
        if (openModal) closeModal(openModal);
    }
}

// ===== RESIZE HANDLER =====
function handleResize() {
    // Ajustar layout em mudanças de tamanho
    if (window.innerWidth > 768 && isMenuOpen) {
        closeMobileMenu();
    }
}

// ===== UTILITÁRIOS =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// ===== PERFORMANCE =====
// Lazy loading para imagens
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===== SERVICE WORKER (PWA) =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('✅ Service Worker registrado:', registration);
            })
            .catch(error => {
                console.log('❌ Service Worker falhou:', error);
            });
    });
}

// ===== ANALYTICS SIMULADO =====
function trackEvent(eventName, eventData = {}) {
    console.log('📊 Evento:', eventName, eventData);
    
    // Aqui você integraria com Google Analytics, Mixpanel, etc.
    if (window.gtag) {
        window.gtag('event', eventName, eventData);
    }
}

// ===== EXPORTAR FUNÇÕES PARA USO GLOBAL =====
window.CyberStop = {
    showNotification,
    toggleTheme,
    openModal,
    closeModal,
    trackEvent
};

// ===== CSS ANIMATIONS =====
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
        100% { transform: translateY(0px) rotate(360deg); }
    }
    
    @keyframes particleExplosion {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(var(--vx), var(--vy)) scale(0);
            opacity: 0;
        }
    }
    
    .animate-in {
        animation: slideInUp 0.6s ease forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .notification {
        font-family: 'Rajdhani', sans-serif;
        font-weight: 500;
    }
    
    .field-error {
        color: #ff0080 !important;
        font-size: 0.8rem;
        margin-top: 0.25rem;
        animation: shake 0.5s ease;
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    .error {
        border-color: #ff0080 !important;
        box-shadow: 0 0 10px rgba(255, 0, 128, 0.3) !important;
    }
    
    .modal.show {
        opacity: 1;
        transform: scale(1);
    }
    
    .modal {
        opacity: 0;
        transform: scale(0.9);
        transition: all 0.3s ease;
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    
    .header.scrolled {
        background: rgba(10, 10, 10, 0.98);
        box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
    }
`;

document.head.appendChild(style);

console.log('🎮 Cyber_Stop Script carregado! Pronto para ação!');
