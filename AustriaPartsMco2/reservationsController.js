const Reservation = require('../model/Reservation');

// GET /reservations
exports.getMyReservations = async(req,res)=>{
 if(!req.session.user){
 return res.redirect("/login");
 }

 const myReservations = await Reservation.find({userId:req.session.user._id});

 res.render("reservations",{
 reservations:myReservations
 });
};

// PATCH /reservations/:id/seat
exports.updateSeat = async(req,res)=>{
 if(!req.session.user){
 return res.send("Access Denied");
 }

 if(!req.body.seat){
 return res.send("Seat is required");
 }

 const updatedReservation = await Reservation.findByIdAndUpdate(
 req.params.id,
 {seat:req.body.seat.toUpperCase()},
 {new:true}
 );

 if(!updatedReservation){
 return res.send("Reservation not found");
 }

 res.json(updatedReservation);
};

// DELETE /reservations/:id
exports.cancelReservation = async(req,res)=>{
 if(!req.session.user){
 return res.send("Access Denied");
 }

 const cancelledReservation = await Reservation.findByIdAndUpdate(
 req.params.id,
 {status:"Cancelled"},
 {new:true}
 );

 if(!cancelledReservation){
 return res.send("Reservation not found");
 }

 res.json(cancelledReservation);
};
