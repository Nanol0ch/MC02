// NOTE: Reservation.js is technically Ravelo's deliverable (Section 4 - Booking).
// A minimal version is included here so reservations/admin-reservations work on
// their own. Fields match what reservations.html and admin-reservations.html
// already display: booking code, route, seat, passenger, price, status.

const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
 bookingCode:String,
 flightId:{
 type:mongoose.Schema.Types.ObjectId,
 ref:"Flight"
 },
 flightCode:String,
 route:String,
 flightDate:String,
 passengerName:String,
 email:String,
 passportNumber:String,
 seat:String,
 price:Number,
 status:{
 type:String,
 default:"Confirmed"
 },
 userId:{
 type:mongoose.Schema.Types.ObjectId,
 ref:"Users"
 }
});

module.exports = mongoose.model("Reservation",reservationSchema);
