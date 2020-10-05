const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
    let number = 0;
      let arr = [];
      if (typeof backyard !== 'object' || backyard.length === 0) {
          return false;
      } else {
          for (let i = 0; i < backyard.length; i++) {
          let innerArr = backyard[i];
          for (let j = 0; j < innerArr.length; j++) {   
              if (innerArr[j] === '^^') {
                  number = number + 1;
              }
          }
      }
      return number;
      } 
  };
