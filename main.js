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
    const instructionData = generateInstruction(aircraft)
    aircraft.setHeading(instructionData.heading);
    aircraft.setAltitude(instructionData.altitude);
    console.log(aircraft, instructionData);
    
  })
})(document)