// hamburger menu
const mainNav = document.querySelector('.navigation')
const hamButton = document.querySelector('#menu');

hamButton.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    hamButton.classList.toggle('show');
});


const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-38451-main.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Kinshasa Congo",
        location: "Kinshasa, Congo",
        dedicated: "2019, April, 14",
        area: 12500,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/kinshasa-democratic-republic-of-the-congo-temple/kinshasa-democratic-republic-of-the-congo-temple-3533-main.jpg"
      },
      {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 37400,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
      },
      {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
      },
      {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
      },
      {
        templeName: "Hong Kong China",
        location: "Hong Kong, China",
        dedicated: "1996, May, 26",
        area: 24265,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple-28125-main.jpg"
      }
    ]  

    const albumContainer = document.getElementById('album-container');

    function renderTemples(filteredTemples) {
      albumContainer.innerHTML = '';
      filteredTemples.forEach(temple => {
        const card = document.createElement('div');
        card.classList.add('temple-card'); // Optional: Add class for styling
    
        card.innerHTML = `
          <img 
            src="${temple.imageUrl}" 
            alt="${temple.templeName}" 
            loading="lazy" 
            class="temple-image"
          />
          <h2>${temple.templeName}</h2>
          <p><strong>Location:</strong> ${temple.location}</p>
          <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
          <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        `;
    
        albumContainer.appendChild(card);
      });
    }
    
    function filterTemples(filter) {
      let filteredTemples;
      switch (filter) {
        case 'Old':
          filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
          break;
        case 'New':
          filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
          break;
        case 'Large':
          filteredTemples = temples.filter(temple => temple.area > 90000);
          break;
        case 'Small':
          filteredTemples = temples.filter(temple => temple.area < 10000);
          break;
        default:
          filteredTemples = temples;
      }
      renderTemples(filteredTemples);
    }
    
    // Event Listener for Navigation
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
    
        // Dynamic title update
        const title = event.target.getAttribute('data-title');
        document.getElementById('page-title').textContent = title;
    
        // Update active class
        document.querySelectorAll('nav a').forEach(navLink => {
          navLink.classList.remove('active');
        });
        event.target.classList.add('active');
    
        // Filter and display temples
        filterTemples(title);
      });
    });
    
    // Initial render for Home
    filterTemples('Home');