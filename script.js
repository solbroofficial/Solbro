document.getElementById('year').textContent = new Date().getFullYear();

// Smoothly close FAQ items when another one opens on small screens.
document.querySelectorAll('.faq-grid details').forEach((detail) => {
  detail.addEventListener('toggle', () => {
    if (!detail.open || window.innerWidth > 600) return;
    document.querySelectorAll('.faq-grid details').forEach((other) => {
      if (other !== detail) other.removeAttribute('open');
    });
  });
});
