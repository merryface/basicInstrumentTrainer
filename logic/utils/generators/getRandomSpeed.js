export function getRandomSpeed(currentSpeed) {
  let speedAddition = Math.round(((Math.random() * 9) - 0.5)) * 5
  let newSpeed = 70 + speedAddition;

  while (newSpeed === currentSpeed) {
    speedAddition = Math.round(((Math.random() * 9) - 0.5)) * 5
    newSpeed = 70 + speedAddition;
  }
  return newSpeed;
}