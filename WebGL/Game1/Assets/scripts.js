const moreGamesButton = document.getElementById('more-games-button');
moreGamesButton.addEventListener('click', () => {
  window.location.href = 'https://donotprikel231.github.io/TGS-001/'; // Replace with the URL you want to open
});

const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');
      
searchButton.addEventListener('click', () => {
const searchText = searchInput.value;
if (searchText.trim().length > 0) {
  window.location.href = `https://donotprikel231.github.io/TGS-001/?q=${encodeURIComponent(searchText)}`;
}
});
