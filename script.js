
document.addEventListener('DOMContentLoaded', () => {
    // Skills bar animation on scroll
    const skillsBars = document.querySelectorAll('.skills-bar div');

    const animateSkillsBars = () => {
        skillsBars.forEach(bar => {
            const width = bar.dataset.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 500);
        });
    };

    const checkScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        skillsBars.forEach(bar => {
            const barTop = bar.getBoundingClientRect().top;

            if (barTop < triggerBottom) {
                bar.style.width = bar.dataset.width;
            } else {
                bar.style.width = '0';
            }
        });
    };

    window.addEventListener('scroll', checkScroll);

    // Initial check
    checkScroll();

    // Contact form submission (simple client-side validation)
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', event => {
        event.preventDefault();

        const name = contactForm.querySelector('input[name="name"]').value;
        const email = contactForm.querySelector('input[name="email"]').value;
        const message = contactForm.querySelector('textarea[name="message"]').value;

        if (name && email && message) {
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});
