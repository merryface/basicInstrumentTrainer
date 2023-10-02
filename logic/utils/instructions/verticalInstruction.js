export function verticalInstruction(callsign, verticalMovement, altitude) {
  const direction = verticalMovement.isClimb ? 'climb' : 'descend'
  return `${callsign}, ${direction} to ${altitude}.`
}