<script>
  import { onMount } from 'svelte';
  import { formatHeading } from '$lib/logic/utils/formatters/formatHeading.js';
  import { Aircraft } from '$lib/logic/Aircraft.js';
  import { formatAltitude } from '$lib/logic/utils/formatters/formatAltitude.js';
  import { formatAirspeed } from '$lib/logic/utils/formatters/formatAirspeed.js';
  import { generateInstruction } from '$lib/logic/utils/instructions/generateInstruction.js';
  import { setCountdown } from '$lib/logic/utils/setCountdown.js';
  import { textToSpeech } from '$lib/logic/utils/textToSpeech/textToSpeech.js';
  import { convertInstructionToSpeech } from '$lib/logic/utils/textToSpeech/convertInstructionToSpeech.js';
  
  let countDown;
  let intervalId;
  let isFlying = false;
  let targetHeading = '';
  let targetAltitude = '';
  let targetAirspeed = '';
  let instruction = 'Standby for instruction';
  let buttonLabel = "Start"

  const triggerInstruction = (aircraft) => {
    if (intervalId) {
      clearInterval(intervalId);
    }

    const instructionData = generateInstruction(aircraft);
    if (instructionData.instructionType === 'heading') aircraft.setHeading(instructionData.heading);
    if (instructionData.instructionType === 'altitude') aircraft.setAltitude(instructionData.altitude);
    if (instructionData.instructionType === 'speed') aircraft.setSpeed(instructionData.speed);

    targetHeading = formatHeading(aircraft.heading);
    targetAltitude = formatAltitude(aircraft.altitude);
    targetAirspeed = formatAirspeed(aircraft.speed);
    instruction = instructionData.instruction;

    let textToSpeechInstruction = convertInstructionToSpeech(instructionData.instruction);
    textToSpeech(textToSpeechInstruction);

    if (instructionData.instructionType === 'heading') countDown = setCountdown(instructionData.turnCalculation.turnTime);
    if (instructionData.instructionType === 'altitude') countDown = setCountdown(instructionData.climbDescentCalculation.timeToAlt);
    if (instructionData.instructionType === 'speed') countDown = setCountdown(instructionData.speedCalculation.accelerationTime);
    console.log(countDown)

    intervalId = setInterval(() => {
      triggerInstruction(aircraft);
    }, countDown*1000);
  }

  const currentAircraft = new Aircraft();

  const commenceFlight = () => {
    if (!isFlying) {
      console.log("start flying");
      isFlying = true;
      buttonLabel = "Stop";
      triggerInstruction(currentAircraft);
    } else {
      console.log("stop flying");
      isFlying = false;
      buttonLabel = "Start";
      if (intervalId) {
        clearInterval(intervalId);
      }
    }
  }
</script>
  
  <h2>Basic Trainer</h2>
  
  <div>
    <p class="currentInstructions">Current Instructions:</p>
    <div class="targets">
      <div class="target">
        <p id="targetHeading">{targetHeading}</p>
      </div>
      <div class="target">
        <p id="targetAltitude">{targetAltitude}</p>
      </div>
      <div class="target">
        <p id="targetAirspeed">{targetAirspeed}</p>
      </div>
    </div>
  
    <p id="instruction">{instruction}</p>
    <button id="generateInstruction" on:click={commenceFlight}>{buttonLabel}</button>
  
    <a href="https://www.anc-academy.aero/">ANC Academy</a>
  </div>