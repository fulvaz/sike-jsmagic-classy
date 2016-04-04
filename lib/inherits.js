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

B.prototype.__proto__ = A.prototype; 
debugger
