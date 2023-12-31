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

// Text to speech
import { textToSpeech } from './logic/utils/textToSpeech/textToSpeech.js';
import { convertInstructionToSpeech } from './logic/utils/textToSpeech/convertInstructionToSpeech.js';

let countDown;
let isFlying = false;

const triggerInstruction = (doc, aircraft) => {
  const instructionData = generateInstruction(aircraft)
  if (instructionData.instructionType === 'heading') aircraft.setHeading(instructionData.heading);
  if (instructionData.instructionType === 'altitude') aircraft.setAltitude(instructionData.altitude);
  if (instructionData.instructionType === 'speed') aircraft.setSpeed(instructionData.speed);

  updateUI(doc, aircraft, instructionData.instruction)

  // convert instruction text to speech readable text
  let textToSpeechInstruction = convertInstructionToSpeech(instructionData.instruction)
  textToSpeech(textToSpeechInstruction)

  // set timer
  if (instructionData.instructionType === 'heading') countDown = setCountdown(instructionData.turnCalculation.turnTime);
  if (instructionData.instructionType === 'altitude') countDown = setCountdown(instructionData.climbDescentCalculation.timeToAlt);
  if (instructionData.instructionType === 'speed') countDown = setCountdown(instructionData.speedCalculation.accelerationTime);

}


((d) => {
  // create an aircraft
  const currentAircraft = new Aircraft();

  // set initial aircraft values
  updateUI(d, currentAircraft, "Standby for instructions");

  d.getElementById('generateInstruction').addEventListener('click', () => {
    // call triggerInstruction, then call it repeadedly with a delay of countDown*1000, until the button is clicked again
    if (!isFlying) {
      console.log("start flying");
      
      isFlying = true;
      d.getElementById('generateInstruction').innerText = "Skip to next";
      triggerInstruction(d, currentAircraft);
      setInterval(() => {
        triggerInstruction(d, currentAircraft);
      }, countDown*1000); 
    }

    if (isFlying) {
      console.log("stop flying");
      isFlying = false;
      clearInterval();
    }
  })

  // set callsign
  d.getElementById('setCallsignButton').addEventListener('click', () => {
    const currentCallsign = d.getElementById('desiredCallsign').value.toUpperCase()
    currentAircraft.setCallsign(currentCallsign)
    console.log(currentCallsign)
    d.getElementById('desiredCallsign').value = ""
    d.getElementById('currentCallsign').innerText = currentCallsign

    isFlying ?
    updateUI(d, currentAircraft,  generateInstruction(currentAircraft))
    :
    updateUI(d, currentAircraft, `${currentCallsign}, standby`)
  })

  // Display chosen altitude
  d.getElementById('altitude').oninput = function() {
    const slider = d.getElementById('currentAltSliderPosition')
    slider.innerText = this.value*100
  }

  // Set Max Altitude
  d.getElementById('setMaxAltitude').addEventListener('click', () => {
    const maxAltitude = d.getElementById('altitude').value*100
    currentAircraft.setMaxAltitude(maxAltitude)
    d.getElementById('selectedMaxAltitude').innerText = formatAltitude(maxAltitude)
  })

  // increase min speed
  d.getElementById('increaseMinSpeed').addEventListener('click', () => {
    const minSpeed = currentAircraft.minSpeed
    if (minSpeed < currentAircraft.maxSpeed - 5) {
    currentAircraft.setMinSpeed(minSpeed + 5)
    d.getElementById('selectedMinSpeed').innerText = formatAirspeed(currentAircraft.minSpeed)
    }
  })

  // decrease min speed
  d.getElementById('reduceMinSpeed').addEventListener('click', () => {
    const minSpeed = currentAircraft.minSpeed
    if (minSpeed > 50) {
      currentAircraft.setMinSpeed(minSpeed - 5)
      d.getElementById('selectedMinSpeed').innerText = formatAirspeed(currentAircraft.minSpeed)
    }
  })

  // increase max speed
  d.getElementById('increaseMaxSpeed').addEventListener('click', () => {
    const maxSpeed = currentAircraft.maxSpeed
    if (maxSpeed < 250) {
      currentAircraft.setMaxSpeed(maxSpeed + 5)
      d.getElementById('selectedMaxSpeed').innerText = formatAirspeed(currentAircraft.maxSpeed)
    }
  })

  // decrease max speed
  d.getElementById('reduceMaxSpeed').addEventListener('click', () => {
    const maxSpeed = currentAircraft.maxSpeed
    if (maxSpeed > currentAircraft.minSpeed + 5) {
      currentAircraft.setMaxSpeed(maxSpeed - 5)
      d.getElementById('selectedMaxSpeed').innerText = formatAirspeed(currentAircraft.maxSpeed)
    }
  })

  // expand menu
  let menuOpen = false;
  d.getElementById('expandableMenu').addEventListener('click', () => {
    if (!menuOpen) d.getElementById('menuItems').style.display = "flex"
    if (menuOpen) d.getElementById('menuItems').style.display = "none"
    menuOpen = !menuOpen

  })

  // close instruction modal
  d.getElementById('closeInstructionalModal').addEventListener('click', () => {
    d.getElementById('instructionsModal').style.display = "none"
  })

  // open instruction modal
  d.getElementById('openInstruction').addEventListener('click', () => {
    d.getElementById('instructionsModal').style.display = "block"
  })

  // open settings modal
  d.getElementById('openSettings').addEventListener('click', () => {
    d.getElementById('settingsModal').style.display = "block"
  })

  // close settings modal
  d.getElementById('closeSettingsModal').addEventListener('click', () => {
    d.getElementById('settingsModal').style.display = "none"
  })


})(document);