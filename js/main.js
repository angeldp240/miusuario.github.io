/* =========================
   CAMBIO DE COLOR DEL HEADER
========================= */
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
});

/* =========================
   MENÚ RESPONSIVE
========================= */
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('nav-menu-active');
});

/* Cerrar menú al hacer clic en enlace */
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('nav-menu-active');
    });
});

/* =========================
   SCROLL SUAVE
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

/* =========================
   FORMULARIO DE CONTACTO
========================= */
const form = document.querySelector('#contact-form');
if(form){
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = form.querySelector('input[name="name"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const message = form.querySelector('textarea[name="message"]').value.trim();

        if(name === '' || email === '' || message === ''){
            alert('Por favor, completa todos los campos.');
            return;
        }

        alert('¡Mensaje enviado con éxito!');
        form.reset();
    });
}
