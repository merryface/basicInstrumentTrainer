export function turnInstruction(callsign, turn, heading) {
  const direction = turn.turnDirection
  return `${callsign}, turn ${direction} heading ${heading}.`
}