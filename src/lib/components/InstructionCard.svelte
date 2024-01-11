<script>
	import { Aircraft } from '$lib/logic/Aircraft.js';
  import { currentAircraft } from '$lib/store.js';
  export let targetHeading
  export let targetAltitude
  export let targetAirspeed
  export let instruction
  export let exerciseHeading
  export let intervalId;

  export let buttonLabel = "Start"
  export let triggerInstruction

  let isFlying = false;

  const commenceFlight = () => {
    if (!isFlying) {
      console.log("start flying");
      isFlying = true;
      buttonLabel = "Stop";
      triggerInstruction($currentAircraft);
    } else {
      console.log("stop flying");
      isFlying = false;
      buttonLabel = "Start";
      $currentAircraft = new Aircraft()
      targetHeading = '360°';
      targetAltitude = '3,000ft';
      targetAirspeed = '105kt';
      if (intervalId) {
        clearInterval(intervalId);
      }
    }
  }

</script>

<div class="container">
  <h2 class="text-center">{exerciseHeading}</h2>
  <div class="card bg-base-100 outline flex flex-col items-center justify-center text-center mx-auto">
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
  
  <button on:click={commenceFlight} class="btn btn-wide btn-sm sm:btn-sm md:btn-md lg:btn-lg btn-outline mx-auto">{buttonLabel}</button>
</div>

<style>
  .container {
    margin: auto;
    margin-top: 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .card {
    width: 90%;
    max-width: 600px;
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