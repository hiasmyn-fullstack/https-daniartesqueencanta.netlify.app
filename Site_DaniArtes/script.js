// ROLAGEM SUAVE — desliza devagar ao clicar no menu
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (evento) {
        evento.preventDefault();
        const alvo = document.querySelector(this.getAttribute('href'));
        if (alvo) {
            alvo.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// MENSAGEM NO CONSOLE
console.log("✨ Daniartesqueencanta — Site carregado com sucesso!");