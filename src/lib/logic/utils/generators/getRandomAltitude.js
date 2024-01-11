export function getRandomAltitude(currentAltitude, minAltitude = 2000, maxAltitude = 5000) {
  const altitudeRange = maxAltitude - minAltitude;
  let newAlt = Math.floor(Math.random() * (altitudeRange / 100 + 1)) * 100 + minAltitude;

  if (newAlt > maxAltitude) newAlt = maxAltitude;
  if (newAlt < minAltitude) newAlt = minAltitude;

  while (newAlt === currentAltitude) {
    newAlt = Math.floor(Math.random() * (altitudeRange / 100 + 1)) * 100 + minAltitude;
    if (newAlt > maxAltitude) newAlt = maxAltitude;
    if (newAlt < minAltitude) newAlt = minAltitude;
  }

  return newAlt;
}