const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// Unsplash API
const count = 5;
const apiKey = '<YOUR_API_KEY>';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Check if all images were loaded
function imageLoaded() {
    imagesLoaded++;
    if (imageLoaded === totalImages) {
        ready = true;
        loader.hidden = true;
        count = 30;
        console.log('ready = ', ready);
    }
}

// Helper Function To Set Attributes on DOM Elements
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Create Elements For Links & Photos, Add to DOM
function displayPhotos() {
    totalImages = photosArray.length;
    console.log('total images', totalImages);
    // Run function for each object in photosArray
    photosArray.forEach((photo) => {
        // Create <a> to link to Unsplash
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });
        // Create <img> for photo
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });
        // Events Listener, check when each is finished loading
        img.addEventListener('load', imageLoaded)
        // Put <img> inside <a>, then put both inside imageContainer Element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        if (response.status === 200) {
            photosArray = await response.json();
            displayPhotos();
        }
    } catch (error) {
        // Cacth Error Here
        console.log(error);
    }
}

// Check to see if scrolling near bottom of page, Load More Photos
// window.innerHeight - Total height of browser window in px
// window.scrollY - Distance from top of page user has scrolled in px
// document.body.offsetHeight - Height of everything in the body, including what is not within view
// We need to substract from offsetHeight to trigger event before bottom is reached (1000px)
window.addEventListener('scroll', () => {
    // console.log('document.body.offsetHeight - 1000', document.body.offsetHeight - 1000);
    if (
        (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 1000)
        && ready
    ) {
        ready = false;
        getPhotos();
    }
});

// On Load
getPhotos();