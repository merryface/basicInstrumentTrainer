export function getRandomSpeed(currentSpeed, minSpeed, maxSpeed) {
  let speedAddition = Math.round(((Math.random() * ((maxSpeed-minSpeed)/5)) - 0.5)) * 5
  let newSpeed = minSpeed + speedAddition;

  while (newSpeed === currentSpeed) {
    speedAddition = Math.round(((Math.random() * 9) - 0.5)) * 5
    newSpeed = 70 + speedAddition;
  }
  return newSpeed;
}