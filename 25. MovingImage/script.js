const movingImage = document.getElementById('movingImage');
let positionX = 0;
let positionY = 0;

function updatePosition() {
  movingImage.style.left = `${positionX}px`;
  movingImage.style.top = `${positionY}px`;
}

document.addEventListener('keydown', function (event) {
  const step = 10; // Change this value to adjust the speed of movement

  switch (event.key) {
    case 'ArrowUp':
      positionY -= step;
      break;
    case 'ArrowDown':
      positionY += step;
      break;
    case 'ArrowLeft':
      positionX -= step;
      break;
    case 'ArrowRight':
      positionX += step;
      break;
    default:
      return; // Do nothing if other keys are pressed
  }

  updatePosition();
});
