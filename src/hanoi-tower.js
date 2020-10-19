const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
    let object = {
        'turns': 0,
        'seconds': 0,
    }
    let turns = Math.pow(2,disksNumber) - 1;
    let turnsPerSec = turnsSpeed / 3600;
    let result = Math.trunc(turns/turnsPerSec);
    object.turns = turns;
    object.seconds = result;
    return object;
};
