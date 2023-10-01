// Generators
import {getRandomHeading} from '../generators/getRandomHeading.js';
import {getRandomAltitude} from '../generators/getRandomAltitude.js';
import {getRandomSpeed} from '../generators/getRandomSpeed.js';

// Calculators
import {turnCalculator} from '../calculators/turnCalculator.js';
import {climbDescentCalculator} from '../calculators/climbDescentCalculator.js';
import {speedCalculator} from '../calculators/speedCalculator.js';

// Instructions
import {turnInstruction} from './turnInstruction.js';
import {verticalInstruction} from './verticalInstruction.js';
import {speedInstruction} from './speedInstruction.js';

export function generateInstruction(aircraft) {
  // randomly pick whether to give a heading, altitude, or speed instruction
  // const selectedInstruction = Math.floor(Math.random() * 3);
  const selectedInstruction = 0;


  // heading
  if (selectedInstruction === 0) {
    const newHeading = getRandomHeading(aircraft.heading)
    const turnCalculation = turnCalculator(aircraft.heading, newHeading);
    const headingInstruction = turnInstruction(aircraft.callsign, turnCalculation, newHeading);

    return {
      instruction: headingInstruction,
      heading: newHeading,
      turnCalculation: turnCalculation
    }
  }


}