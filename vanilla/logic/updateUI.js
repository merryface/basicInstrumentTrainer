// Formatters
import {formatHeading} from './utils/formatters/formatHeading.js';
import {formatAltitude} from './utils/formatters/formatAltitude.js';
import {formatAirspeed} from './utils/formatters/formatAirspeed.js';

export function updateUI(d, aircraft, instruction) {
  d.getElementById('targetHeading').innerText = formatHeading(aircraft.heading);
  d.getElementById('targetAltitude').innerText = formatAltitude(aircraft.altitude);
  d.getElementById('targetAirspeed').innerText = formatAirspeed(aircraft.speed);
  d.getElementById('instruction').innerText = instruction;
}