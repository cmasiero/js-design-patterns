/**
 * The Command pattern aims to encapsulate method invocation, requests, or operations 
 * into a single object and gives us the ability to both parameterize and pass method 
 * calls around that can be executed at our discretion. 
 * In addition, it enables us to decouple objects invoking the action from the objects that implement them, 
 * giving us a greater degree of overall flexibility in swapping out concrete classes (objects).
 */

 /**
  * The general idea behind the Command pattern is that it provides us a means to separate 
  * the responsibilities of issuing commands from anything executing commands, 
  * delegating this responsibility to different objects instead.
  */

var CarManager = {

	// request information
	requestInfo: function (model, id) {
		return "The information for " + model + " with ID " + id + " is foobar";
	},

	// purchase the car
	buyVehicle: function (model, id) {
		return "You have successfully purchased Item " + id + ", a " + model;
	},

	// arrange a viewing
	arrangeViewing: function (model, id) {
		return "You have successfully booked a viewing of " + model + " ( " + id + " ) ";
	}

};

CarManager.execute = function (name) {
	return CarManager[name] && CarManager[name].apply(CarManager, [].slice.call(arguments, 1));
};

// var cx = CarManager.execute( "lippa", "Ford Escort", "34232" );

var c1 = CarManager.execute( "arrangeViewing", "Ferrari", "14523" );
var c2 = CarManager.execute( "requestInfo", "Ford Mondeo", "54323" );
var c3 = CarManager.execute( "requestInfo", "Ford Escort", "34232" );
var c4 = CarManager.execute( "buyVehicle", "Ford Escort", "34232" );

console.log({c1});
console.log({c2});
console.log({c3});
console.log({c4});




