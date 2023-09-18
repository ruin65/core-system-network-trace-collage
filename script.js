// JavaScript (script.js)
const dotsContainer = document.querySelector('.dots-container');
const imageLinks = document.querySelectorAll('.image-container a');
let dotsTimeout; // 声明dotsTimeout变量

// Function to create and append a dot to the container
function createDot() {
    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.innerHTML = '...';
    dotsContainer.appendChild(dot);
}

// Function to clear the dots
function clearDots() {
    dotsContainer.innerHTML = '';
}

// Function to add dots using requestAnimationFrame
function addDots() {
    createDot();
    dotsTimeout = requestAnimationFrame(addDots);
}

// Add event listener to handle scroll events
window.addEventListener('scroll', () => {
    // Clear previous timeout (if any)
    cancelAnimationFrame(dotsTimeout);

    // Add dots using requestAnimationFrame
    addDots();

    // Set a timeout to clear the dots after a delay (e.g., 2 seconds)
    setTimeout(() => {
        cancelAnimationFrame(dotsTimeout);
        clearDots();
    }, 2000);
});

// Add a click event listener to all image links
imageLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior

        // Wait for a while (e.g., 2 seconds) before navigating to the new page
        setTimeout(() => {
            window.location.href = link.href;
        }, 2000);
    });
});
