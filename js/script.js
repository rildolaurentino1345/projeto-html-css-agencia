// Menu Mobile
const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById('nav');
const menuLinks = document.querySelectorAll('#menu a');

function toggleMenu(event) {
    if (event.type === 'touchstart') {
        event.preventDefault();
        event.stopPropagation();
    }
    nav.classList.toggle('active');
    const isActive = nav.classList.contains('active');
    btnMobile.setAttribute('aria-expanded', isActive);
    btnMobile.setAttribute('aria-label', isActive ? 'Fechar menu' : 'Abrir menu');
}

if (btnMobile) {
    btnMobile.addEventListener('click', toggleMenu);
    btnMobile.addEventListener('touchstart', toggleMenu);
    btnMobile.setAttribute('aria-controls', 'nav');
}

// Fechar menu ao clicar em links
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        btnMobile.setAttribute('aria-expanded', 'false');
        btnMobile.setAttribute('aria-label', 'Abrir menu');
    });
});

// Fechar menu com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
        nav.classList.remove('active');
        btnMobile.setAttribute('aria-expanded', 'false');
        btnMobile.setAttribute('aria-label', 'Abrir menu');
    }
});

// Atualizar ano
document.getElementById("ano").textContent = new Date().getFullYear();
