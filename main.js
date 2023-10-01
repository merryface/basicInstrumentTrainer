// Generators
import {getRandomHeading} from './logic/utils/generators/getRandomHeading.js';
import {getRandomAltitude} from './logic/utils/generators/getRandomAltitude.js';
import {getRandomSpeed} from './logic/utils/generators/getRandomSpeed.js';

// Calculators
import {turnCalculator} from './logic/utils/calculators/turnCalculator.js';
import {climbDescentCalculator} from './logic/utils/calculators/climbDescentCalculator.js';
import {speedCalculator} from './logic/utils/calculators/speedCalculator.js';

// Formatters
import {formatHeading} from './logic/utils/formatters/formatHeading.js';

// Aircraft
import {Aircraft} from './logic/Aircraft.js';
import { formatAltitude } from './logic/utils/formatters/formatAltitude.js';
import { formatAirspeed } from './logic/utils/formatters/formatAirspeed.js';

// instruction
import {generateInstruction} from './logic/utils/instructions/generateInstruction.js';

((d) => {
  // create an aircraft
  const aircraft = new Aircraft();
  console.log(aircraft);

  // set initial aircraft values
  d.getElementById('targetHeading').innerText = formatHeading(aircraft.heading);
  d.getElementById('targetAltitude').innerText = formatAltitude(aircraft.altitude);
  d.getElementById('targetAirspeed').innerText = formatAirspeed(aircraft.speed);

  d.getElementById('generateInstruction').addEventListener('click', () => {
    
  })
})(document)