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
  let targetHeading = '360°';
  let targetAltitude = '3000ft';
  let targetAirspeed = '105kt';
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
  
  <h2 class="text-center">Basic Trainer</h2>
  
  <div class="card w-96 bg-base-100 bg-blue-700 flex flex-col items-center justify-center text-center mx-auto">
    <div class="card-body">
      <p class="currentInstructions">Current Instructions:</p>
      <div class="targets">
        <div class="target">
          <p class="instruction">{targetHeading}</p>
        </div>
        <div class="target">
          <p class="instruction">{targetAltitude}</p>
        </div>
        <div class="target">
          <p class="instruction">{targetAirspeed}</p>
        </div>
      </div>
    </div>
    <p class="instructions">{instruction}</p>
  </div>

  <button on:click={commenceFlight} class="btn btn-wide btn-sm sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-success mx-auto">{buttonLabel}</button>

  <a class="mx-auto link" href="https://www.anc-academy.aero/">ANC Academy</a>

  <style>
    h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .card, .instructions {
      margin-bottom: 2rem;
    }

    .currentInstructions {
      font-weight: bold;
    }

    .instruction {
      border: 1px solid white;
      border-radius: 5px;
      height: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .targets {
      display: flex;
      gap: 1rem;
      flex-direction: column;
    }

    button {
      margin-bottom: 2rem;
    }
  </style>