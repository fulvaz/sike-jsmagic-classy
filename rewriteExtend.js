var hasProp = {}.hasOwnProperty;

var extend = function(child, parent) {

	child.prototype.__proto__ = parent.prototype;
	
  return child;
};


function A() {
}

A.prototype.a = function() {
  return 1;
};

function B() {
}

B.prototype.b = function() {
  return 2;
};

B = extend(B, A);

var b = new B()
b.a(); // 1
b.b(); // 2
console.log(b.a());
console.log(b.b());
