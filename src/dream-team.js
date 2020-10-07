
const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (typeof members !== 'object' || !members || members.constructor !== Array || members.length === 0) {
      return false;
  } else {
      let arrayOnlyStrings = members.filter((value) => typeof value === 'string');
      let newArray = [];
      for (let i = 0; i < arrayOnlyStrings.length; i++) {
          newArray.push(arrayOnlyStrings[i].toUpperCase().trim().split('')[0]);   
      }
      return newArray.sort().join('');
  } 
};
