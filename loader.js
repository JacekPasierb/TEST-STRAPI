window.addEventListener('load', function() {
  const loader = document.getElementById('loader');
  setTimeout(function() {
    loader.style.display = 'none';
  }, 2000); // Ustaw czas wyświetlania loadera w milisekundach (tutaj: 2000 ms = 2 sekundy)
});