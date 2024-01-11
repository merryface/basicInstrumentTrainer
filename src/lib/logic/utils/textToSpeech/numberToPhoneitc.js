// Function to convert a number into its phonetic representation
export function numberToPhonetic(number) {
  const digitMap = {
    '0': 'zero',
    '1': 'won',
    '2': 'two',
    '3': 'tree',
    '4': 'fower',
    '5': 'fife',
    '6': 'six',
    '7': 'sefen',
    '8': 'eight',
    '9': 'niner',
    '°': 'degrees'
  };
  return number.split('').map(digit => digitMap[digit] || digit).join(' ');
}