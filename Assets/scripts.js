const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');
const games = document.querySelectorAll('.more-games-box');

searchButton.addEventListener('click', () => {
  const searchText = searchInput.value;
  if (searchText.trim().length > 0) {
    window.location.href = `https://donotprikel231.github.io/TGS-001/?q=${encodeURIComponent(searchText)}`;
  } else {
    games.forEach((game) => {
      game.style.display = 'block';
    });
  }
});

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const searchTerm = urlParams.get('q');

if (searchTerm !== null) {
  games.forEach((game) => {
    const gameName = game.querySelector('p').textContent.toLowerCase();
    if (gameName.includes(searchTerm.toLowerCase())) {
      game.style.display = 'block';
    } else {
      game.style.display = 'none';
    }
  });
}
