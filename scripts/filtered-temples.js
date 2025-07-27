document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menu-button');
    const navigation = document.getElementById('primary-nav');
    
    menuButton.addEventListener('click', function() {
        navigation.classList.toggle('open');

        if (navigation.classList.contains('open')) {
            menuButton.textContent = '✕';
        } else {
            menuButton.textContent = '☰';
        }
    });

    // Temple data array
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        // Additional temples
        {
            templeName: "Rome Italy",
            location: "Rome, Italy",
            dedicated: "2019, March, 10",
            area: 40000,
            imageUrl: "images/temple9.webp"
        },
        {
            templeName: "Sydney Australia",
            location: "Sydney, Australia",
            dedicated: "1984, September, 20",
            area: 30697,
            imageUrl: "images/temple8.png"
        },
        {
            templeName: "Salt Lake City Utah",
            location: "Salt Lake City, Utah, United States",
            dedicated: "1893, April, 6",
            area: 253000,
            imageUrl: "images/temple7.png"
        }
    ];

    // Function to create temple cards
    function createTempleCard(temple) {
        const card = document.createElement('div');
        card.className = 'temple-card';
        
        card.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        `;
        
        return card;
    }

    // Function to display temples based on filter
    function displayTemples(filter = 'all') {
        const gallery = document.getElementById('temple-cards');
        gallery.innerHTML = '';
        
        let filteredTemples = [];
        
        switch(filter) {
            case 'old':
                filteredTemples = temples.filter(temple => {
                    const year = parseInt(temple.dedicated.split(',')[0]);
                    return year < 1900;
                });
                break;
            case 'new':
                filteredTemples = temples.filter(temple => {
                    const year = parseInt(temple.dedicated.split(',')[0]);
                    return year > 2000;
                });
                break;
            case 'large':
                filteredTemples = temples.filter(temple => temple.area > 90000);
                break;
            case 'small':
                filteredTemples = temples.filter(temple => temple.area < 10000);
                break;
            default:
                filteredTemples = temples;
        }
        
        filteredTemples.forEach(temple => {
            gallery.appendChild(createTempleCard(temple));
        });
    }

    // Initial display of all temples
    displayTemples();

    // Add event listeners to nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const filter = this.dataset.filter;
            displayTemples(filter);
            
            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});