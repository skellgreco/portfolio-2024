// Get the button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show the button when the user scrolls down 50% of the document height
window.onscroll = function () {
    const scrollPercentage = (document.documentElement.scrollTop || document.body.scrollTop) / 
                            (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    if (scrollPercentage > 0.1) { // Change this value to adjust when the button appears
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Smooth scroll back to the top when the button is clicked
scrollToTopBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Adds a smooth scroll effect
    });
};
