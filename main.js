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


((d) => {
  // create an aircraft
  const aircraft = new Aircraft();

  // set initial aircraft values
  d.getElementById('targetHeading').innerText = formatHeading(aircraft.getHeading());
  d.getElementById('targetAltitude').innerText = formatAltitude(aircraft.getAltitude());
  d.getElementById('targetAirspeed').innerText = formatAirspeed(aircraft.getSpeed());

  
  
  
  
})(document)