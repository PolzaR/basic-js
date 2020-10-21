const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let regex1 = /--discard-next/;
	let regex2 = /--discard-prev/;
	let regex3 = /--double-next/;
	let regex4 = /--double-prev/;
	let newArr = [];
	if(!Array.isArray(arr)) {
		throw new Error('Not an array');
	} else {
		for(let i = 0; i < arr.length; i++) {
			newArr.push(arr[i]);
		};
		for(let i = 0; i < newArr.length; i++) {
			if(regex1.test(newArr[i])) {
				if(i == newArr.length - 1) {
					newArr.splice(i, 1);
				} else{
					newArr.splice(i, 2);
				}
			} else if(regex2.test(newArr[i])) {
				if(i == 0) {
					newArr.splice(i, 1);
				} else{
					newArr.splice(i - 1, 2);
				}
				
			} else if(regex3.test(newArr[i])) {
				if(i == newArr.length - 1) {
					newArr.splice(i, 1);
				} else{
					newArr[i] = newArr[i+1];
				}
				
			} else if(regex4.test(newArr[i])) {
				if(i == 0) {
					newArr.splice(i, 1);
				} else{
					newArr[i] = newArr[i-1];
				}
				
			}
		}
	    return newArr;
	}
};
