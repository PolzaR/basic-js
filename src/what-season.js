const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    let season;
    if(typeof date === 'undefined') {
    	return 'Unable to determine the time of year!';
    } else if(isNaN(date.getTime())) {
    	 throw new Error('Error!');
    } else {
    	let month = date.getMonth();
	 	if(month <= 1 || month === 11) {
	        season = 'winter';
	      } else if(month < 5 && month > 1) {
	        season = 'spring';
	      } else if(month < 8 && month > 4) {
	        season = 'summer';
	      } else {
	        season = 'autumn';
	      }
      	return season;    
    }       
}
