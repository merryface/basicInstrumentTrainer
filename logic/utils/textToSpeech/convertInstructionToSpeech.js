import { numberToPhonetic } from "./numberToPhoneitc.js";
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
  const phoneticNumber = numberToPhonetic(number);
  words[2] = phoneticNumber;
}

// Check if the second word is or "turn"
if (words.length > 1 && (words[1] === "turn")) {
  const number = words[4];
  const phoneticNumber = numberToPhonetic(number);
  words[4] = phoneticNumber;
}

// Join the words back together to form the modified instruction string
const phoneticInstruction = words.join(' ');

return phoneticInstruction;
}