const cardData = [
    { title: "Bridges", content: "A bridge replaces missing teeth by anchoring crowns to adjacent teeth. Cemented in place, bridges restore function and appearance, relying on healthy adjacent teeth for support." },
    { title: "Children's Teeth", content: "We treat children with care and patience to build lifelong oral hygiene habits. Dental visits should start by their first birthday, and sealants may be recommended for cavity prevention on permanent teeth." },
    { title: "Crowns", content: "Crowns fully cover damaged teeth to prevent further harm, providing strength and restoring appearance. They are custom-made and typically require two visits to complete." },
    { title: "Deep Cleaning", content: "Deep cleaning treats gum disease by removing tartar and bacteria below the gums to stop infection and prevent further bone loss, protecting your teeth long-term." },
    { title: "Dental Cleaning", content: "Routine cleanings remove plaque, tartar, and stains to keep your teeth healthy and your smile bright. Regular visits are essential for maintaining good oral health." },
    { title: "Dentures", content: "Dentures replace missing teeth on the top, bottom, or both jaws. Custom-fitted for comfort and aesthetics, they restore your ability to eat, speak, and smile confidently." },
    { title: "Fillings", content: "Fillings repair cavities or damage using durable amalgam or tooth-colored composite materials. The choice depends on your needs and preferences for lasting results." },
    { title: "Implants", content: "Dental implants are titanium posts placed in the bone to support crowns, replacing missing teeth without affecting adjacent ones. They look and function like natural teeth." },
    { title: "Partials", content: "Partials replace multiple missing teeth and are secured with clasps on remaining teeth. Removable and natural-looking, they restore functionality and your smile." },
    { title: "Root Canal Therapy", content: "Root canal therapy treats infection in a tooth’s root canal by cleaning and sealing it, relieving pain and preserving the natural tooth." },
    { title: "Whitening", content: "Professional whitening uses custom trays and a bleaching solution to lighten tooth color, providing stable, lasting results with minimal sensitivity." }
];

// Function to render cards
function renderCards() {
    const container = document.getElementById('cards-container');
    container.innerHTML = ''; // Clear existing content

    cardData.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `
            <h2>${card.title}</h2>
            <p id="content-${index}" class="collapsed">${card.content}</p>
            <button id="toggle-${index}">⌄</button>
        `;
        container.appendChild(cardElement);

        // Add event listener to toggle button
        document.getElementById(`toggle-${index}`).addEventListener('click', () => toggleContent(index));
    });
}

// Function to toggle card content
function toggleContent(index) {
    const content = document.getElementById(`content-${index}`);
    const button = document.getElementById(`toggle-${index}`);

    if (content.classList.contains('collapsed')) {
        // Expand content
        content.classList.remove('collapsed');
        button.textContent = `^`;
    } else {
        // Collapse content
        content.classList.add('collapsed');
        button.textContent = `⌄`;
    }
}

// Initialize the page
function init() {
    renderCards();
}

init();