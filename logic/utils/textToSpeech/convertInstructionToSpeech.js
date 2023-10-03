import { wordToPhonetic } from "./wordToPhonetic.js";

export function convertInstructionToSpeech(instruction) {
  // Split the instruction string into words
  const words = instruction.split(/\s+/);

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
