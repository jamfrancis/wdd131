// hamburger menu
const mainNav = document.querySelector('.navigation')
const hamButton = document.querySelector('#menu');

hamButton.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    hamButton.classList.toggle('show');
});


// when a nav item is clicked
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {

        // dynamic title insertion
        event.preventDefault();
        const title = event.target.getAttribute('data-title');
        document.getElementById('page-title').textContent = title;

        // sets clicked link to active
        document.querySelectorAll('nav a').forEach(navLink => {
            navLink.classList.remove('active');
        });
        event.target.classList.add('active');

        // hides the hamburger menu when link is clicked
        mainNav.classList.toggle('show');
        hamButton.classList.toggle('show');
    });
});