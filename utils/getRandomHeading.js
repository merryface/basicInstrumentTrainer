function getRandomHeading(previousHeading, minDifference=20) {
  // Calculate the minimum and maximum allowed headings in intervals of 5 degrees
  const minInterval = 5;
  const minHeading = (previousHeading - minDifference + 360) % 360;
  const maxHeading = (previousHeading + minDifference) % 360;

  let randomHeading;

  // Generate a random number in increments of 5 degrees
  do {
    randomHeading = Math.floor(Math.random() * (360 / minInterval)) * minInterval;
  } while (
    (randomHeading >= minHeading && randomHeading <= previousHeading) ||
    (randomHeading >= (previousHeading + 360) && randomHeading <= maxHeading)
  );

  return randomHeading;
}

module.exports = getRandomHeading;
