window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const scrollY = window.scrollY;

    // Check if the scroll position has passed the navigation's initial position
    if (scrollY > 70) { // Adjust this value based on the initial top position of the nav
        nav.classList.add('fixed'); // Add class to fix the navigation at the top
    } else {
        nav.classList.remove('fixed'); // Remove the fixed class
    }
});
