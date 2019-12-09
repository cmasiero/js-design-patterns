/*
	It is a behavioural design pattern that provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.

	Iterators have a special kind of behavior where we step through an ordered set of values one at a time by calling next() until we reach the end. The introduction of Generators and Iterators in ES6 made the implementation of iterator pattern extremely straightforward.
*/

// using Iterator
class IteratorClass {
	constructor(data) {
		this.index = 0;
		this.data = data;
	}

	[Symbol.iterator]() {
		return {
			next: () => {
				if (this.index < this.data.length) {
					return { value: this.data[this.index++], done: false };
				} else {
					this.index = 0; // to reset iteration status
					return { done: true };
				}
			},
		};
	}
}

// using Generator
function* iteratorUsingGenerator(collection) {
	var nextIndex = 0;

	while (nextIndex < collection.length) {
		yield collection[nextIndex++];
	}
}

module.exports = {
	IteratorClass,
	iteratorUsingGenerator,
};
// stage 1
// stage 2
// stage 3
var a = "value 1";
var b = { attr1: "value attr 1" };
var c = "value 2";
var d = "value 3";
var array = [a, b, c, d];

var it = new IteratorClass(array);
console.log(...it);

console.log('[************************]');

for (let num of it) {
	console.log(num); // 1, then 2, 3, 4, 5
}
