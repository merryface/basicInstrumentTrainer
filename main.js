// Generators
const getRandomHeading = require('./logic/utils/generators/getRandomHeading.js');
const getRandomAltitude = require('./logic/utils/generators/getRandomAltitude.js');
const getRandomSpeed = require('./logic/utils/generators/getRandomSpeed.js');

// Calculators
const turnCalculator = require('./logic/utils/calculators/turnCalculator.js');
const climbDescentCalculator = require('./logic/utils/calculators/climbDescentCalculator.js');
const speedCalculator = require('./logic/utils/calculators/speedCalculator.js');

// Aircraft
const Aircraft = require('./logic/Aircraft.js');

const aircraft = new Aircraft();
console.log(aircraft.getSpeed());




