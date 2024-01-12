<script>
  import { currentAircraft } from '$lib/store.js';
  import { formatAltitude } from '$lib/logic/utils/formatters/formatAltitude.js';
</script>


<div class="container border-solid border-2 border-sky-500 p-3 rounded-md">

  <h3>Aircraft Editor</h3>
  
  <form>
    <label>
      Callsign:
      <input type="text" class="input-secondary input w-full max-w-xs input-sm" bind:value={$currentAircraft.callsign}>
    </label>

    <label>
      Presets:
      <select class="select select-bordered w-full max-w-xs">
        <option disabled selected>Select aircraft type</option>
        <option>Cessna 172</option>
        <option>Pa28</option>
        <option>Pa38 / Cessna 152</option>
        <option>Diamond Da42</option>
        <option>Beechcraft Baron 58</option>
      </select>
    </label>
    
    <label>
      Max Altitude:
      {formatAltitude($currentAircraft.maxAltitude)}
      <input type="range" min={$currentAircraft.minAltitude + 1000} max="15000" step="500" class="range range-accent" bind:value={$currentAircraft.maxAltitude} />
    </label>
    
    <label>
      Min Altitude:
      {formatAltitude($currentAircraft.minAltitude)}
      <input type="range" min="2500" max={$currentAircraft.maxAltitude - 1000} step="100" class="range range-primary" bind:value={$currentAircraft.minAltitude} />
    </label>
    
    <label>
      Max Speed:
      {$currentAircraft.maxSpeed}kt
      <input type="range" min={$currentAircraft.minSpeed + 20} max="250" step="5" class="range range-accent" bind:value={$currentAircraft.maxSpeed} />
    </label>
    
    <label>
      Min Speed:
      {$currentAircraft.minSpeed}kt
      <input type="range" min="60" max={$currentAircraft.maxSpeed - 20} step="5" class="range range-primary" bind:value={$currentAircraft.minSpeed} />
    </label>
  </form>
</div>
  
<style>
  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .container {
    margin-top: 3rem;
  }
</style>