// Define a mapping of letters to phonetic representations
const phoneticMap = {
  A: 'alpha',
  B: 'bravo',
  C: 'charlie',
  D: 'delta',
  E: 'echo',
  F: 'foxtrot',
  G: 'golf',
  H: 'hotel',
  I: 'india',
  J: 'juliet',
  K: 'kilo',
  L: 'lima',
  M: 'mike',
  N: 'november',
  O: 'oscar',
  P: 'papa',
  Q: 'quebec',
  R: 'romeo',
  S: 'sierra',
  T: 'tango',
  U: 'uniform',
  V: 'victor',
  W: 'whiskey',
  X: 'x-ray',
  Y: 'yankee',
  Z: 'zulu',
};

// Function to convert a single word into phonetic representation
export function wordToPhonetic(word) {
  const phoneticWord = [];
  for (const letter of word) {
    const uppercaseLetter = letter.toUpperCase();
    const phoneticRepresentation = phoneticMap[uppercaseLetter] || uppercaseLetter;
    phoneticWord.push(phoneticRepresentation);
  }
  return phoneticWord.join(' ');
}