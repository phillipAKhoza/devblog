const bars = document.getElementById('bars');
const mobileMenu = document.getElementById('mobileMenu');
bars.addEventListener('click', function() {
  mobileMenu.classList.toggle('active')
})