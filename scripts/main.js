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
        const calorinaImages = interiors.filter(item => item.location.includes('Calorina'));
        displayImages(calorinaImages);
    });

    // Initialize with all images
    displayImages(interiors);
});
