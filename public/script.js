const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

function closeMenu() {
  mobileMenu.classList.add('translate-x-full');
  mobileMenu.classList.remove('translate-x-0');
}

function openMenu() {
  mobileMenu.classList.remove('translate-x-full');
  mobileMenu.classList.add('translate-x-0');
}

menuBtn.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('translate-x-full');
  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

closeIcon.addEventListener('click', closeMenu);

// Close menu when clicking outside
document.addEventListener('click', (event) => {
  if (!menuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
    closeMenu();
  }
});

// Close menu when pressing "Escape" key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMenu();
  }
});
