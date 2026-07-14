// NOTE: Flight.js is technically Pathak's deliverable (Section 2 - data model).
// A minimal version is included here so admin-flights CRUD works on its own.
// If Pathak's version already has more fields (airline, origin, destination,
// departure/arrival datetime, available seats), just merge this schema into it -
// flightCode, route, and price are the only fields admin-flights.hbs touches.

const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
 flightCode:String,
 route:String,
 price:Number
});

module.exports = mongoose.model("Flight",flightSchema);
