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
const animationContainer = document.createElement('div');
    animationContainer.style.position = 'fixed';
    animationContainer.style.top = 0;
    animationContainer.style.left = 0;
    animationContainer.style.width = '100%';
    animationContainer.style.height = '100%';
    animationContainer.style.pointerEvents = 'none';
    animationContainer.style.zIndex = '1';
    document.body.appendChild(animationContainer);

    function createSnowflake() {
      const snowflake = document.createElement('div');
      snowflake.textContent = '❄️ ';
      snowflake.style.position = 'absolute';
      snowflake.style.fontSize = `${Math.random() * 50.19 + 5.19}px`; // Smaller snowflakes
      snowflake.style.color = '#FFFFFF';
      snowflake.style.textShadow = '0 5 10px rgba(255, 255, 255, 0.8)';
      snowflake.style.left = `${Math.random() * window.innerWidth}px`;
      snowflake.style.top = '10px';
      snowflake.style.animation = `fall ${Math.random() * 5 + 7}s linear`;
      animationContainer.appendChild(snowflake);

      snowflake.addEventListener('animationend', () => {
        snowflake.remove();
      });
    }

    function createFirework() {
      const firework = document.createElement('div');
      firework.style.position = 'absolute';
      firework.style.width = '5px';
      firework.style.height = '5px';
      firework.style.borderRadius = '50%';
      firework.style.background = `hsl(${Math.random() * 360}, 60%, 50%)`;
      firework.style.left = `${Math.random() * window.innerWidth}px`;
      firework.style.top = `${Math.random() * window.innerHeight}px`;
      firework.style.animation = 'explode 0.5s ease-out';
      animationContainer.appendChild(firework);

      setTimeout(() => {
        firework.remove();
      }, 500);
    }

    document.addEventListener('scroll', () => {
      createFirework();
    });

    setInterval(createSnowflake, 800);
