// Generators
import {getRandomHeading} from '../generators/getRandomHeading.js';
import {getRandomAltitude} from '../generators/getRandomAltitude.js';
import {getRandomSpeed} from '../generators/getRandomSpeed.js';

// Calculators
import {turnCalculator} from '../calculators/turnCalculator.js';
import {climbDescentCalculator} from '../calculators/climbDescentCalculator.js';
import {speedCalculator} from '../calculators/speedCalculator.js';

// Formatters
import {formatHeading} from '../formatters/formatHeading.js';
import {formatAltitude} from '../formatters/formatAltitude.js';
import {formatAirspeed} from '../formatters/formatAirspeed.js';

// Instructions
import {turnInstruction} from './turnInstruction.js';
import {verticalInstruction} from './verticalInstruction.js';
import {speedInstruction} from './speedInstruction.js';

export function generateInstruction(aircraft) {
  const selectedInstruction = Math.floor(Math.random() * 3);

  // heading
  if (selectedInstruction === 0) {
    const newHeading = getRandomHeading(aircraft.heading)
    const turnCalculation = turnCalculator(aircraft.heading, newHeading);
    const headingInstruction = turnInstruction(aircraft.callsign, turnCalculation, formatHeading(newHeading));

    return {
      instructionType: 'heading',
      instruction: headingInstruction,
      heading: newHeading,
      turnCalculation: turnCalculation
    }
  }

  // altitude
  if (selectedInstruction === 1) {
    const newAltitude = getRandomAltitude(aircraft.altitude);
    const climbDescentCalculation = climbDescentCalculator(aircraft.altitude, newAltitude);
    const altitudeInstruction = verticalInstruction(aircraft.callsign, climbDescentCalculation, formatAltitude(newAltitude));

    return {
      instructionType: 'altitude',
      instruction: altitudeInstruction,
      altitude: newAltitude,
      climbDescentCalculation: climbDescentCalculation
    }
  }

  // speed
  if (selectedInstruction === 2) {
    const newSpeed = getRandomSpeed(aircraft.speed);
    const speedCalculation = speedCalculator(aircraft.speed, newSpeed);
    const airspeedInstruction = speedInstruction(aircraft.callsign, newSpeed);

    return {
      instructionType: 'speed',
      instruction: airspeedInstruction,
      speed: newSpeed,
      speedCalculation: speedCalculation
    }
  }
}