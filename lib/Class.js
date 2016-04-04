`use strict`
module.exports = function(c, superClass) {
	//construct function
	function newClass() {
		if(c.initialize != undefined) {
			c.initialize.apply(this, arguments);
		}
	}


	//set default __super__
	newClass.__super__ = Object;

	//inherit
	if(superClass != undefined) {
		newClass = extend(newClass, superClass);
		//__super__
		newClass.__super__ = superClass;
	}

	
	//assign properties
	var properties = Object.keys(c).filter(function(key) {
		return key !==  "initialize";  
	}).reduce(function(current, next, _, array){
		current[next] = c[next];
		return current;
	}, newClass.prototype);

	var recursiveSuperClass = newClass;
	newClass.prototype.super = function(methodName) {
		recursiveSuperClass = recursiveSuperClass.__super__;
		var argumentsToPass = [].slice.call(arguments, 1);
		return recursiveSuperClass.prototype[methodName].apply(this, argumentsToPass);
	}
	return newClass;
}

function extend(child, parent) {
	function ctor() {this.constructor = child};
	ctor.prototype = parent.prototype;
	child.prototype = new ctor();
	return child;
}
