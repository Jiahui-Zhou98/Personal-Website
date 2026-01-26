// Add scroll progress bar functionality
export function initScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.id = 'scrollProgress';
  document.body.prepend(progressBar);

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;
    const progress = scrollPercent * 100;
    progressBar.style.width = progress + '%';
  });
}


// Initialize Bootstrap tooltips
export function initTooltips() {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  if (tooltipTriggerList.length > 0) {
    [...tooltipTriggerList].map(
      tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl)
    );
  }
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initTooltips();
});
