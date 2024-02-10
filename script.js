document.addEventListener('DOMContentLoaded', function () {
    const showButton = document.getElementById('showButton');
    const overlay = document.getElementById('overlay');
    const sidebar = document.getElementById('sidebar');
    const closeButton = document.getElementById('closeButton');
  
    showButton.addEventListener('click', function () {
      sidebar.style.left = '0';
      overlay.style.display = 'block';
    });
  
    closeButton.addEventListener('click', function () {
      sidebar.style.left = '-250px';
      overlay.style.display = 'none';
    });
  
    overlay.addEventListener('click', function () {
      sidebar.style.left = '-250px';
      overlay.style.display = 'none';
    });
  });
  