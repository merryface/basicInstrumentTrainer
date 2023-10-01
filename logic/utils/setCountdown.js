export function setCountdown(timeToManeuver) {
  // create a random number of seconds between 30 and 90
  const randomSeconds = Math.floor(Math.random() * 60) + 30
  return timeToManeuver + randomSeconds
}