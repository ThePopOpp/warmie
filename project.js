// Select the truck body (SVG) and all the color buttons
const truckBody = document.querySelector('#truckBody');
const colorButtons = document.querySelectorAll('.color-button');

// Add click event listener to each button
colorButtons.forEach(button => {
    button.addEventListener('click', function() {
        const selectedColor = this.getAttribute('data-color'); // Get color from data attribute
        
        // Change the color of the truck body (SVG)
        truckBody.style.filter = `brightness(0) saturate(100%) invert(31%) sepia(89%) saturate(5142%) hue-rotate(${getHueFromColor(selectedColor)}deg) brightness(102%) contrast(104%)`;
    });
});

const actionButton = document.getElementById('actionButton');

actionButton.addEventListener('click', function() {
    alert('Floating Action Button Clicked!');
    // Add custom functionality here, such as changing the color of the truck, etc.
});


// Function to map hex colors to hue-rotate values (adjust as needed)
function getHueFromColor(hexColor) {
    const colorMap = {
        // High Gloss
        '#C51E25': 0,    // Hot Rod Red
        '#E5531C': 15,   // Burnt Orange
        '#FDD835': 60,   // Bright Yellow
        '#3CB043': 100,  // Green Envy
        '#3A6351': 135,  // Mystic Green
        '#6DCFF6': 200,  // Sky Blue
        '#007BB8': 220,  // Blue Raspberry
        '#98FF98': 80,   // High Green Flip
        '#970B17': 355,  // Ruby Rosso
        '#000000': 0,    // Black
        '#3A3A3A': 20,   // Black Metallic
        '#4F4F4F': 45,   // Meteor Grey
        '#A5A5A5': 60,   // Nardo Grey
        '#FFFFFF': 0,    // White
        '#E1E1E1': 10,   // White Aluminum
        '#2B2B2B': 5,    // Satin Black

        // Gloss
        '#B0272F': 0,    // Red Metallic
        '#CE2E2E': 20,   // Dragon Fire Red
        '#D32F2F': 30,   // Hot Rod Red
        '#E64A19': 40,   // Fiery Orange
        '#DA8B37': 50,   // Liquid Copper
        '#F57C00': 60,   // Bright Orange
        '#FFD700': 70,   // Intense Yellow
        '#43A047': 100,  // Green Envy
        '#007F00': 120,  // Kelly Green
        '#007D7A': 150,  // Atomic Teal
        '#003366': 180,  // Midnight Blue
        '#005B96': 200,  // Boat Blue
        '#1E88E5': 220,  // Blue Raspberry
        '#37474F': 240,  // Cosmic Blue
        '#0A0A0A': 0,    // Black Gloss
        '#4B4946': 60,   // Gold Dust Black

        // Satin
        '#8BC34A': 100,  // Apple Green
        '#C62828': 10,   // Smoldering Red
        '#D32F2F': 30,   // Ferrari Red Berry
        '#1E88E5': 220,  // Atomic Blue
        '#E0E0E0': 30,   // Electric Silver
        '#0277BD': 240,  // Ocean Blue
        '#F9F9F9': 10,   // Pearl White
        '#455A64': 300,  // Thundercloud
        '#FCFCFC': 0,    // Pearl White SP

        // Matte
        '#2E7D32': 140,  // Pine Green Metallic
        '#0288D1': 220,  // Blue Raspberry Matte
        '#212121': 0,    // Deep Black
        '#5D4037': 60,   // Brown Metallic
        '#B0BEC5': 60,   // Silver
        '#37474F': 60,   // Charcoal

        // Textures
        '#000000': 0,    // Matrix Black
        '#333333': 10,   // Textured Carbon Fiber
        '#4B4946': 60,   // Gold Dust Black
        '#6D6D6D': 60,   // Fission Matte
        '#2B2B2B': 5,    // Carbon Fiber

        // Color Flips
        '#800080': 270,  // Gloss Flip Berry Purple
        '#8B4513': 30,   // Satin Flip Brown
        '#B22222': 0,    // Satin Flip Cherry Red
        '#FF4500': 15,   // Gloss Flip Sunset Red
        '#8B0000': 0,    // Satin Flip Black Rose
    };

    return colorMap[hexColor] || 0;  // Default to 0 if color is not found
}
