
// Smooth scroll for internal links
document.addEventListener('click', function(e){
  const a = e.target.closest('a[href^="#"]');
  if(!a) return;
  const target = document.querySelector(a.getAttribute('href'));
  if(target){
    e.preventDefault();
    target.scrollIntoView({behavior:'smooth'});
    history.pushState(null, '', a.getAttribute('href'));
  }
});

// Active nav link
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navbar a.nav-link').forEach(link => {
  const href = link.getAttribute('href');
  if(href === path) link.classList.add('active');
});
