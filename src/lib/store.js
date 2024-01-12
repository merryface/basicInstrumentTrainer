// store.js
import { writable } from 'svelte/store';
import {Aircraft} from './logic/Aircraft'; // Assuming Aircraft is in the same directory

export const currentAircraft = writable(new Aircraft());

// Cessna 152
export const cessna152 = writable(new Aircraft(
  "Cessna 152",
  95,
  65,
  110,
  3000,
  2000,
  5000,
  360
));

// Cessna 172
export const cessna172 = writable(new Aircraft(
  "Cessna 172",
  105,
  70,
  115,
  3000,
  2000,
  5000,
  360
))

// Piper Pa38
export const piperPa38 = writable(new Aircraft(
  "Piper Pa38",
  95,
  70,
  110,
  3000,
  2000,
  5000,
  360
))

// Piper Pa28
const piperPa28 = writable(new Aircraft(
  "Piper Pa28",
  95,
  70,
  105,
  3000,
  2000,
  5000,
  360
))

// Diamond DA40
export const diamondDa40 = writable(new Aircraft(
  "Diamond DA40",
  125,
  65,
  135,
  3000,
  2000,
  5000,
  360
));

// Diamond DA42
export const diamondDa42 = writable(new Aircraft(
  "Diamond DA42",
  120,
  85,
  170,
  3000,
  2000,
  10000,
  360
));

// Diamond Da62
export const diamondDa62 = writable(new Aircraft(
  "Diamond DA62",
  130,
  100,
  170,
  3000,
  2000,
  10000,
  360
));

// Beechcraft Baron 58
export const beechcraftBaron58 = writable(new Aircraft(
  "Beechcraft Baron 58",
  180,
  100,
  195,
  3000,
  2000,
  10000,
  360
));