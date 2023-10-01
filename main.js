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

// countdown
import {setCountdown} from './logic/utils/setCountdown.js';

let countDown;

const triggerInstruction = (doc, aircraft) => {
  const instructionData = generateInstruction(aircraft)
  if (instructionData.instructionType === 'heading') aircraft.setHeading(instructionData.heading);
  if (instructionData.instructionType === 'altitude') aircraft.setAltitude(instructionData.altitude);
  if (instructionData.instructionType === 'speed') aircraft.setSpeed(instructionData.speed);

  updateUI(doc, aircraft, instructionData.instruction)
    
  // set timer
  if (instructionData.instructionType === 'heading') countDown = setCountdown(instructionData.turnCalculation.turnTime);
  if (instructionData.instructionType === 'altitude') countDown = setCountdown(instructionData.climbDescentCalculation.timeToAlt);
  if (instructionData.instructionType === 'speed') countDown = setCountdown(instructionData.speedCalculation.accelerationTime);

  console.log(countDown);
}


((d) => {
  // create an aircraft
  const currentAircraft = new Aircraft();

  // set initial aircraft values
  d.getElementById('targetHeading').innerText = formatHeading(currentAircraft.heading);
  d.getElementById('targetAltitude').innerText = formatAltitude(currentAircraft.altitude);
  d.getElementById('targetAirspeed').innerText = formatAirspeed(currentAircraft.speed);

  d.getElementById('generateInstruction').addEventListener('click', () => {
    // call triggerInstruction, then call it repeadedly with a delay of countDown*1000, until the button is clicked again
    triggerInstruction(d, currentAircraft);
    setInterval(() => {
      triggerInstruction(d, currentAircraft);
    }, countDown*1000);

  })
})(document);