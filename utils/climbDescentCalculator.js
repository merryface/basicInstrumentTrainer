function generateRandomClimbDescent(currentAltitude, targetAltitude) {
  // calculate the time in seconds to climb or descend assuming 500 feet per minute
  let altitudeDifference = Math.abs(targetAltitude - currentAltitude);
  return altitudeDifference / 500 * 60;
}

module.exports = generateRandomClimbDescent;