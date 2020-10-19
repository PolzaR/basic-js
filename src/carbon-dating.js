const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity ) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (typeof sampleActivity !== 'string') {
    return false;
  } else if ((+sampleActivity) > 15 || (parseInt(sampleActivity)) <= 0) {
    return false;
  } else if (isNaN(parseInt(sampleActivity))) {
    return false;
  } 
};

// k = 0.693/HALF_LIFE_PERIOD;
//  t = Math.log2(MODERN_ACTIVITY/numActivity) / k;
