// Toggle the sidebar visibility
document.getElementById('menu-toggle').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const mainContainer = document.getElementById('main-container');

    // Check if the sidebar is hidden
    if (sidebar.style.left === '-240px' || sidebar.style.left === '-100%') {
        // Show the sidebar
        sidebar.style.left = '0';
        mainContainer.style.marginLeft = '240px'; // Adjust content area to right
    } else {
        // Hide the sidebar
        sidebar.style.left = '-240px';
        mainContainer.style.marginLeft = '0'; // Restore the content area
    }
});

// Filter movies based on search input
document.getElementById('search-bar').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    const movieCards = document.querySelectorAll('.movie-card');

    movieCards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        const genre = card.getAttribute('data-genre').toLowerCase();
        
        // Check if the search query matches either title or genre
        if (title.includes(searchQuery) || genre.includes(searchQuery)) {
            card.style.display = ''; // Show the card
        } else {
            card.style.display = 'none'; // Hide the card
        }
    });
});
