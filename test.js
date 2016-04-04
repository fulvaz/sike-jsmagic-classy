var Class = require('./lib/Class');
const A = Class({
      foo: function(n) {
        return n + n;
      }
    });

    const B = Class({
      foo: function(n) {
        return this.super("foo", n * n);
      }
    }, A);

    const C = Class({
      foo: function(n) {
        return this.super("foo", n * 10);
      }
    }, B);

		const b = new B();
		console.log(b.foo(10));
		console.log(b.foo(10));
