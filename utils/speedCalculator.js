function speedCalculator(currentSpeed, targetSpeed) {
  // assume 1kt acceleration/deceleration per second
  return Math.abs(currentSpeed - targetSpeed);
}