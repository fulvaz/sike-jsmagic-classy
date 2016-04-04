`use strict`
module.exports = function(c) {
	//construct function
	function newClass() {
		if(c.initialize != undefined) {
			c.initialize.apply(this, arguments);
		}
	}

	//assign properties
	var properties = Object.keys(c).filter(function(key) {
		return key !==  "initialize";  
	}).reduce(function(current, next, _, array){
		debugger
		current[next] = c[next];
		return current;
	}, newClass.prototype);



	return newClass;
}
