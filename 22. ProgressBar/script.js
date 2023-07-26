const progressBar = document.getElementById('progressBar');
const body=document.getElementById('body');

// Function to calculate and update the progress
function updateProgress() {
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (window.scrollY / totalHeight) * 100;
  progressBar.style.width = `${progress}%`;
  progressBar.style.backgroundColor="pink";
  progressBar.style.height="50px";
}

// Listen for scroll events and update the progress bar
window.addEventListener('scroll',updateProgress)
