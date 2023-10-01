export function climbDescentCalculator(currentAltitude, targetAltitude) {
  // calculate the time in seconds to climb or descend assuming 500 feet per minute
  const altitudeDifference = targetAltitude - currentAltitude
  const absoluteAltitudeDifference = Math.abs(altitudeDifference);
  const timeToAlt = absoluteAltitudeDifference / 500 * 60;
  const isClimb = altitudeDifference > 0;
  return {
    timeToAlt,
    isClimb,
  }
}