/**
 * There are three parts to the Chain of Responsibility pattern: sender, receiver, and request. 
 * The sender makes the request. 
 * The receiver is a chain of 1 or more objects that choose whether to handle the request or pass it on. 
 * The request itself can be an object that encapsulates all the appropriate data.
 */

var MoneyStack = function (billSize) {
	this.billSize = billSize;
	this.next = null;
}
MoneyStack.prototype = {
	withdraw: function (amount) {
		var numOfBills = Math.floor(amount / this.billSize);

		if (numOfBills > 0) {
			// Eject the bills
			this._ejectMoney(numOfBills);
			// Shrink the amount by how much money we ejected
			amount = amount - (this.billSize * numOfBills);
		}

		// If there is any money left to withdraw and if we have
		// another stack in the line, pass the request on
		amount > 0 && this.next && this.next.withdraw(amount);
	},
	// set the stack that comes next in the chain
	setNextStack: function (stack) {
		this.next = stack;
	},
	// private method that ejects the money
	_ejectMoney: function (numOfBills) {
		console.log(numOfBills + " $" + this.billSize
			+ " bill(s) has/have been spit out");
	}
}


var ATM = function() {
    // Create the stacks of money
    // We'll show you the implementation for this next
    var stack100 = new MoneyStack(100),
        stack50 = new MoneyStack(50),
        stack20 = new MoneyStack(20),
        stack10 = new MoneyStack(10),
        stack5 = new MoneyStack(5),
        stack1 = new MoneyStack(1);

    // Set the hierarchy for the stacks
    stack100.setNextStack(stack50);
    stack50.setNextStack(stack20);
    stack20.setNextStack(stack10);
    stack10.setNextStack(stack5);
    stack5.setNextStack(stack1);

    // Set the top stack as a property
    this.moneyStacks = stack100;
}

ATM.prototype.withdraw = function(amount) {
    this.moneyStacks.withdraw(amount);
}

// USAGE
var atm = new ATM();
atm.withdraw(186);
/* outputs:
    1 $100 bill(s) has/have been spit out
    1 $50 bill(s) has/have been spit out
    1 $20 bill(s) has/have been spit out
    1 $10 bill(s) has/have been spit out
    1 $5 bill(s) has/have been spit out
    1 $1 bill(s) has/have been spit out
*/

console.log('[***]');

atm.withdraw(72);
/* outputs:
    1 $50 bill(s) has/have been spit out
    1 $20 bill(s) has/have been spit out
    2 $1 bill(s) has/have been spit out
*/