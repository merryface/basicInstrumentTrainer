export function getRandomAltitude(currentAltitude) {
  let newAlt = Math.floor(Math.random() * 50) * 100

  if (newAlt > 5000) newAlt = 5000
  if (newAlt < 2000) newAlt = 2000

  while (newAlt === currentAltitude) {
    newAlt = Math.floor(Math.random() * 50) * 100
    if (newAlt > 5000) newAlt = 5000
    if (newAlt < 2000) newAlt = 2000
  }

  return newAlt
}