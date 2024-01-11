export function formatHeading(number) {
  return `${number.toFixed(0).padStart(3, '0')}°`;
}