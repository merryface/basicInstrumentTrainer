<script>
  import { currentAircraft } from '$lib/store.js';
	import InstructionCard from '$lib/components/InstructionCard.svelte';
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
  let targetHeading = '360°';
  let targetAltitude = '3000ft';
  let targetAirspeed = '105kt';
  let instruction = 'Standby for instruction';
  let buttonLabel = "Start"

  const triggerInstruction = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }

    const aircraft = $currentAircraft

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

</script>
  
  <InstructionCard
    exerciseHeading="Basic Trainer"
    {targetHeading}
    {targetAltitude}
    {targetAirspeed}
    {instruction}
    {triggerInstruction}
    {intervalId}
    {buttonLabel}
  />

  <a class="mx-auto link" href="https://www.anc-academy.aero/">ANC Academy</a>