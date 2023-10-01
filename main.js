// Generators
const getRandomHeading = require('./utils/generators/getRandomHeading.js');
const getRandomAltitude = require('./utils/generators/getRandomAltitude.js');
const getRandomSpeed = require('./utils/generators/getRandomSpeed.js');

// Calculators
const turnCalculator = require('./utils/calculators/turnCalculator.js');
const climbDescentCalculator = require('./utils/calculators/climbDescentCalculator.js');
const speedCalculator = require('./utils/calculators/speedCalculator.js');


console.log(getRandomSpeed(80));



