<script>
  import { currentAircraft } from '$lib/store.js';
  import { formatAltitude } from '$lib/logic/utils/formatters/formatAltitude.js';

</script>

<h3>Aircraft Editor</h3>

<form>
  <label>
    Callsign:
    <input type="text" bind:value={$currentAircraft.callsign}>
  </label>

  <label>
    Max Altitude:
    {formatAltitude($currentAircraft.maxAltitude)}
    <input type="range" min={$currentAircraft.minAltitude + 1000} max="15000" step="500" class="range range-accent" bind:value={$currentAircraft.maxAltitude} />
  </label>

  <label>
    Min Altitude:
    {formatAltitude($currentAircraft.minAltitude)}
    <input type="range" min="25000" max={$currentAircraft.maxAltitude - 1000} step="100" class="range range-primary" bind:value={$currentAircraft.minAltitude} />
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