document.addEventListener('DOMContentLoaded', () => {
    // Fechar bolha de chat
    const closeBubble = document.querySelector('.close-bubble');
    if (closeBubble) {
        closeBubble.addEventListener('click', () => {
            closeBubble.parentElement.style.display = 'none';
        });
    }

    // Mudar estilo do header ao rolar
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Ocultar header ao rolar para baixo, mostrar ao rolar para cima
        if (currentScroll > lastScroll && currentScroll > 50) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        lastScroll = currentScroll;
    });

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isActive = answer.classList.contains('active');

            // Fechar todos os outros
            document.querySelectorAll('.faq-answer').forEach(item => {
                item.classList.remove('active');
                item.style.maxHeight = null;
            });
            document.querySelectorAll('.faq-question').forEach(item => {
                item.classList.remove('active');
            });

            // Abrir ou fechar o clicado
            if (!isActive) {
                answer.classList.add('active');
                question.classList.add('active');
                answer.style.maxHeight = (answer.scrollHeight + 50) + 'px';
            }
        });
    });
    // Fechar menu ao clicar em um link
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuToggle = document.querySelector('.menu-toggle');
    if (mobileMenu && menuToggle) {
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }
});
