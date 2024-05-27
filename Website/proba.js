function navigate(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(page => {
    page.style.display = 'none';
  });

  // Show the selected page
  document.getElementById(pageId).style.display = 'block';
}

// Load products dynamically
document.addEventListener('DOMContentLoaded', () => {
  const productsPage = document.getElementById('products');
  // Fetch or generate product items here
  productsPage.innerHTML = '<h2>Our Products</h2><p>Check out our amazing products below.</p>';
  // Add product details...
});
