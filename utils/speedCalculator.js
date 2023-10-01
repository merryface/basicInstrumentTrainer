function speedCalculator(currentSpeed, targetSpeed) {
  // assume 1kt acceleration/deceleration per second
  return {
    accelerationTime: Math.abs(currentSpeed - targetSpeed)
  };

}