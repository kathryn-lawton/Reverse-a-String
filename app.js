"use strict"

let string = ('doggo');

function reverseString (string) {

	let newString = "";
	for (var i = string.length - 1; i >= 0; i--) {

		newString  += string[i];
	}
	
	return newString;
}
		
console.log(reverseString(string));
