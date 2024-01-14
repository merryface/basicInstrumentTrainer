<script>
  // Component
	import InstructionCard from '$lib/components/InstructionCard.svelte';
  
  // Data
  import { currentAircraft } from '$lib/store.js';
  import patternA from '$lib/pattern_images/pattern-a.png';
  
  // Speech
	import { convertInstructionToSpeech } from '$lib/logic/utils/textToSpeech/convertInstructionToSpeech.js';
	import { textToSpeech } from '$lib/logic/utils/textToSpeech/textToSpeech.js';
  import { numberToPhonetic } from '$lib/logic/utils/textToSpeech/numberToPhonetic.js';
  
  // Set Pattern and Instructions
  const patternAlpha = [
    { instruction: 'Maintain heading ', targetHeading: 360, countDown: 60 },
    { instruction: 'Turn right to heading ', targetHeading: 90, countDown: 90},
    { instruction: 'Turn right to heading ', targetHeading: 180, countDown: 90},
    { instruction: 'Turn right to heading ', targetHeading: 270, countDown: 90 },
    { instruction: 'Turn right to heading ', targetHeading: 360, countDown: 90 },
  ]

  
  // Set turn calculation
  let countDown;
  let intervalId;
  let currentId = 0;
  let patternCount = 0;
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
      patternCount += 1;
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
  {patternCount}
/>

<div tabindex="0" class="collapse bg-base-300 collapse-arrow border focus:bg-info-content">
  <div class="collapse-title text-xl font-medium">
    What is Pattern A?
  </div>
  <div class="collapse-content"> 
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">Pattern A</h2>
        <p>Pattern A is the first of a series of instrument training flight patterns. Flying in a square circuit at constant speed and height. Master the square, and fly it in exactly 6 minutes!</p>
      </div>
      <figure><img src={patternA} alt="Pattern A" /></figure>
    </div>
  </div>
</div>


<a class="mx-auto link" href="https://www.anc-academy.aero/">ANC Academy</a>

  <style>
    .collapse {
      width: 90%;
      max-width: 600px;
      align-self: center;
      margin-top: 4rem;
      margin-bottom: 1rem;
    }

    .card {
      padding-bottom: 1rem;
    }
  </style>