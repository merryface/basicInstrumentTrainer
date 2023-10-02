export function convertInstructionToSpeech(instruction) {
  // Split the instruction string into words
  const words = instruction.split(/\s+/);

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
    // Add more mappings for other letters if needed
  };

  // Function to convert a single word into phonetic representation
  function wordToPhonetic(word) {
    const phoneticWord = [];
    for (const letter of word) {
      const uppercaseLetter = letter.toUpperCase();
      const phoneticRepresentation = phoneticMap[uppercaseLetter] || uppercaseLetter;
      phoneticWord.push(phoneticRepresentation);
    }
    return phoneticWord.join(' ');
  }

  // Convert only the first word in the instruction to its phonetic representation
  if (words.length > 0) {
    words[0] = wordToPhonetic(words[0]);
  }

// Check if the second word is "speed"
if (words.length > 1 && (words[1] === "speed")) {
  const number = words[2];
  const phoneticNumber = convertNumberToPhonetic(number);
  words[2] = phoneticNumber;
}

// Check if the second word is or "turn"
if (words.length > 1 && (words[1] === "turn")) {
  const number = words[4];
  const phoneticNumber = convertNumberToPhonetic(number);
  words[4] = phoneticNumber;
}

// Join the words back together to form the modified instruction string
const phoneticInstruction = words.join(' ');

return phoneticInstruction;
}

// Function to convert a number into its phonetic representation
function convertNumberToPhonetic(number) {
  console.log(number)
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
  console.log(number.split('').map(digit => digitMap[digit] || digit).join(' '))

  return number.split('').map(digit => digitMap[digit] || digit).join(' ');
}
