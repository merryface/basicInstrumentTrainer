// Generators
import {getRandomHeading} from './logic/utils/generators/getRandomHeading.js';
import {getRandomAltitude} from './logic/utils/generators/getRandomAltitude.js';
import {getRandomSpeed} from './logic/utils/generators/getRandomSpeed.js';

// Calculators
import {turnCalculator} from './logic/utils/calculators/turnCalculator.js';
import {climbDescentCalculator} from './logic/utils/calculators/climbDescentCalculator.js';
import {speedCalculator} from './logic/utils/calculators/speedCalculator.js';

// Instructions
import {headingInstruction} from './logic/utils/instructions/headingInstruction.js';
import {altitudeInstruction} from './logic/utils/instructions/altitudeInstruction.js';
import {speedInstruction} from './logic/utils/instructions/speedInstruction.js';

export function generateInstruction(aircraft) {
  // randomly pick whether to give a heading, altitude, or speed instruction
  const selectedInstruction = Math.floor(Math.random() * 3);

  // heading
  if (instruction === 0) {
    const newHeading = getRandomHeading(aircraft.getHeading())
  }


}