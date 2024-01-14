<script>
  // Component
	import InstructionCard from '$lib/components/InstructionCard.svelte';
  
  // Data
  import { currentAircraft } from '$lib/store.js';
  
  // Speech
	import { convertInstructionToSpeech } from '$lib/logic/utils/textToSpeech/convertInstructionToSpeech.js';
	import { textToSpeech } from '$lib/logic/utils/textToSpeech/textToSpeech.js';
  import { numberToPhonetic } from '$lib/logic/utils/textToSpeech/numberToPhonetic.js';
  
  // Set Pattern and Instructions
  const patternAlpha = [
    { instruction: `Maintain heading `, targetHeading: 360, countDown: 60 },
    { instruction: `Turn right to heading ${numberToPhonetic('090°')}`, targetHeading: 90, countDown: 90},
    { instruction: `Turn right to heading ${numberToPhonetic('180°')}`, targetHeading: 180, countDown: 90},
    { instruction: `Turn right to heading ${numberToPhonetic('270°')}`, targetHeading: 270, countDown: 90 },
    { instruction: `Turn right to heading ${numberToPhonetic('360°')}`, targetHeading: 360, countDown: 90 },
  ]

  
  // Set turn calculation
  let countDown;
  let intervalId;
  let currentId = 0;
  let targetHeading = '360°';
  let targetAltitude = '3,000ft';
  let targetAirspeed = '105kt';
  let instruction = 'Standby for instruction';
  let buttonLabel = "Start"

  //  ================================================

  // Call function to trigger instruction
  const triggerInstruction = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }

    // finshed array
    if (currentId === patternAlpha.length - 1) {
      currentId = 0;
    }

    const currentInstruction = patternAlpha[currentId];
    const aircraft = $currentAircraft
    const textToSpeechInstruction = convertInstructionToSpeech(`${aircraft.callsign}, ` + currentInstruction.instruction + numberToPhonetic(currentInstruction.targetHeading + '°'));
    textToSpeech(textToSpeechInstruction);
    instruction = `${aircraft.callsign}, ` + currentInstruction.instruction + currentInstruction.targetHeading + '°';
    countDown = currentInstruction.countDown;
    targetHeading = currentInstruction.targetHeading + "°";



// ==============================================
    // Set for next instruction
    currentId += 1;
    intervalId = setInterval(() => {
      triggerInstruction(aircraft);
    }, countDown*1000);
  }

</script>
  
  <InstructionCard
    exerciseHeading="Training Pattern A"
    {targetHeading}
    {targetAltitude}
    {targetAirspeed}
    {instruction}
    {triggerInstruction}
    {intervalId}
    {buttonLabel}
  />

  <a class="mx-auto link" href="https://www.anc-academy.aero/">ANC Academy</a>