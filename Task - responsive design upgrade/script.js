document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('show');
    });
});

document.getElementById('mobile-menu').addEventListener('click', function() {
    const nav = document.querySelector('nav ul');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});
