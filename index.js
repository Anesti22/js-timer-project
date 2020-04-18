const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration = durationInput.value;

durationInput.addEventListener("change", () => {
  duration = durationInput.value
});

let running = false;

const timer = new Timer(durationInput, startButton, pauseButton, {
  onTick(timeRemaining) {
    circle.setAttribute(
      'stroke-dashoffset',
      (perimeter * timeRemaining) / duration - perimeter
    );
    console.log((perimeter * timeRemaining) / duration - perimeter);
  },
  onComplete() {
    console.log('Timer is completed');
  }
});