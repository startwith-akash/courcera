document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.project-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('This will take you to the project!');
        });
    });

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for your message!');
        form.reset();
    });
});