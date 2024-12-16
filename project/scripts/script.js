// hamburger menu
const mainNav = document.querySelector('.navigation')
const hamButton = document.querySelector('#menu');

hamButton.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    hamButton.classList.toggle('show');
});

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;

        // Toggle active class on the parent .faq-item
        faqItem.classList.toggle('active');

        // Optionally close other open questions (accordion-style)
        document.querySelectorAll('.faq-item').forEach((item) => {
            if (item !== faqItem) {
                item.classList.remove('active');
            }
        });
    });
});

function toggleFAQ(index) {
    const faqItem = document.querySelectorAll('.faq-item')[index];
    const expandedFAQs = JSON.parse(localStorage.getItem('expandedFAQs')) || [];

    if (faqItem.classList.contains('active')) {
        faqItem.classList.remove('active');
        const updatedFAQs = expandedFAQs.filter(faqIndex => faqIndex !== index);
        localStorage.setItem('expandedFAQs', JSON.stringify(updatedFAQs));
    } else {
        faqItem.classList.add('active');
        expandedFAQs.push(index);
        localStorage.setItem('expandedFAQs', JSON.stringify(expandedFAQs));
    }
}

// Restore state on page load
document.addEventListener('DOMContentLoaded', () => {
    const expandedFAQs = JSON.parse(localStorage.getItem('expandedFAQs')) || [];
    expandedFAQs.forEach(index => {
        const faqItem = document.querySelectorAll('.faq-item')[index];
        if (faqItem) faqItem.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu');
    const navigation = document.getElementById('navigation');

    menuButton.addEventListener('click', () => {
        navigation.classList.toggle('show');
    });
});