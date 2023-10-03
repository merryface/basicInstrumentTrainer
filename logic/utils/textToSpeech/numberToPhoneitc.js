// Function to convert a number into its phonetic representation
export function numberToPhonetic(number) {
  const digitMap = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '°': 'degrees'
  };
  return number.split('').map(digit => digitMap[digit] || digit).join(' ');
}