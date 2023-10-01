// Formatters
import {formatHeading} from './logic/utils/formatters/formatHeading.js';

// Aircraft
import {Aircraft} from './logic/Aircraft.js';
import { formatAltitude } from './logic/utils/formatters/formatAltitude.js';
import { formatAirspeed } from './logic/utils/formatters/formatAirspeed.js';

// instruction
import {generateInstruction} from './logic/utils/instructions/generateInstruction.js';

// updateUI
import {updateUI} from './logic/updateUI.js';

((d) => {
  // create an aircraft
  const aircraft = new Aircraft();

  // set initial aircraft values
  d.getElementById('targetHeading').innerText = formatHeading(aircraft.heading);
  d.getElementById('targetAltitude').innerText = formatAltitude(aircraft.altitude);
  d.getElementById('targetAirspeed').innerText = formatAirspeed(aircraft.speed);

  d.getElementById('generateInstruction').addEventListener('click', () => {
    const instructionData = generateInstruction(aircraft)

    if (instructionData.instructionType === 'heading') aircraft.setHeading(instructionData.heading);
    if (instructionData.instructionType === 'altitude') aircraft.setAltitude(instructionData.altitude);
    if (instructionData.instructionType === 'speed') aircraft.setSpeed(instructionData.speed);

    updateUI(d, aircraft, instructionData.instruction)
    
  })
})(document)