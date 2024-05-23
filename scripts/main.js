import { interiors } from '../assets/data/houses.js';

document.addEventListener('DOMContentLoaded', function () {
    const galleryContent = document.getElementById('gallery-content');

    function displayImages(images) {
        galleryContent.innerHTML = '';
        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.img;
            imgElement.alt = image.category;
            imgElement.classList.add('gallery-item');
            galleryContent.appendChild(imgElement);
        });
    }

    document.getElementById('show-all').addEventListener('click', function () {
        displayImages(interiors);
    });

    document.getElementById('show-seattle').addEventListener('click', function () {
        const seattleImages = interiors.filter(item => item.location.includes('Seattle'));
        displayImages(seattleImages);
    });

    document.getElementById('show-calorina').addEventListener('click', function () {
        const calorinaImages = interiors.filter(item => item.location.includes('Los Angeles'));
        displayImages(calorinaImages);
    });

    // Initialize with all images
    displayImages(interiors);
});


document.addEventListener("DOMContentLoaded", function () {
    const menuOpen = document.getElementById('menuOpen');
    const menuClose = document.getElementById('menuClose');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links ul li a');

    // Function to close the menu
    function closeMenu() {
        navLinks.classList.remove('open');
        menuOpen.style.display = 'block';
        menuClose.style.display = 'none';
    }

    menuOpen.addEventListener('click', () => {
        navLinks.classList.add('open');
        menuOpen.style.display = 'none';
        menuClose.style.display = 'block';
    });

    menuClose.addEventListener('click', () => {
        closeMenu();
    });

    // Close menu when a nav item is clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            closeMenu();
        });
    });

    // Close menu on scroll
    window.addEventListener('scroll', () => {
        if (navLinks.classList.contains('open')) {
            closeMenu();
        }
    });
});
