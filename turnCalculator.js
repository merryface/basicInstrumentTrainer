// Function to calculate the time for the shortest turn between two headings
function calculateTurn(startHeading, endHeading, turnRate = 3) {
  // Ensure headings are in the range [0, 360)
  startHeading = (startHeading + 360) % 360;
  endHeading = (endHeading + 360) % 360;

  // Calculate the difference in headings in both directions
  let clockwiseDifference = (endHeading - startHeading + 360) % 360;
  let counterclockwiseDifference = (startHeading - endHeading + 360) % 360;

  // Determine the shortest turn direction
  let shortestDifference, turnDirection;
  if (clockwiseDifference < counterclockwiseDifference) {
    shortestDifference = clockwiseDifference;
    turnDirection = "right";
  } else {
    shortestDifference = counterclockwiseDifference;
    turnDirection = "left";
  }

  // Calculate the time required to turn in the shortest direction
  let turnTime = shortestDifference / turnRate;

  return { turnDirection, turnTime };
}

module.exports = calculateTurn;
