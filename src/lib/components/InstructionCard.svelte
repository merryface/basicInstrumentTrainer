<script>
  export let targetHeading
  export let targetAltitude
  export let targetAirspeed
  export let instruction
  export let exerciseHeading
  export let currentAircraft
  export let intervalId;

  export let buttonLabel = "Start"
  export let triggerInstruction

  let isFlying = false;

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

<h2 class="text-center">{exerciseHeading}</h2>
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