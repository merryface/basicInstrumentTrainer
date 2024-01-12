// store.js
import { writable } from 'svelte/store';
import {Aircraft} from './logic/Aircraft'; // Assuming Aircraft is in the same directory

export const currentAircraft = writable(new Aircraft());

export const aircrafts = writable([
  new Aircraft("Cessna 152", currentAircraft.callsign, 95, 65, 110, 3000, 2000, 5000, 360),
  new Aircraft("Cessna 172", currentAircraft.callsign, 105, 70, 115, 3000, 2000, 5000, 360),
  new Aircraft("Piper Pa38", currentAircraft.callsign, 95, 70, 110, 3000, 2000, 5000, 360),
  new Aircraft("Piper Pa28", currentAircraft.callsign, 95, 70, 105, 3000, 2000, 5000, 360),
  new Aircraft("Diamond DA40", currentAircraft.callsign, 125, 65, 135, 3000, 2000, 5000, 360),
  new Aircraft("Diamond DA42", currentAircraft.callsign, 120, 85, 170, 3000, 2000, 10000, 360),
  new Aircraft("Diamond DA62", currentAircraft.callsign, 130, 100, 170, 3000, 2000, 10000, 360),
  new Aircraft("Beechcraft Baron 58", currentAircraft.callsign, 180, 100, 195, 3000, 2000, 10000, 360)
]);