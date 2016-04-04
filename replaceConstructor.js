function Foo() {
}

Foo.prototype.a = function() { return 1 };

var foo = new Foo();

foo instanceof Foo
// true
foo.constructor === Foo
// true
