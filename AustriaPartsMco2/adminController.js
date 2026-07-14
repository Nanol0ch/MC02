const Flight = require('../model/Flight');
const Reservation = require('../model/Reservation');

// GET /admin/dashboard
exports.getDashboard = (req,res)=>{
 if(!req.session.user){
 return res.redirect("/login");
 }
 if(req.session.user.role!="admin"){
 return res.send("Access Denied");
 }

 res.render("admin-dashboard");
};

// GET /admin/users
exports.getUsersPage = (req,res)=>{
 if(!req.session.user){
 return res.redirect("/login");
 }
 if(req.session.user.role!="admin"){
 return res.send("Access Denied");
 }

 res.render("admin-users");
};

// GET /admin/flights
exports.getFlights = async(req,res)=>{
 if(!req.session.user){
 return res.redirect("/login");
 }
 if(req.session.user.role!="admin"){
 return res.send("Access Denied");
 }

 const allFlights = await Flight.find();

 res.render("admin-flights",{
 flights:allFlights
 });
};

// POST /admin/flights
exports.createFlight = async(req,res)=>{
 if(!req.session.user||req.session.user.role!="admin"){
 return res.send("Access Denied");
 }

 const newFlight = new Flight({
 flightCode:req.body.flightCode,
 route:req.body.route,
 price:req.body.price
 });

 await newFlight.save();

 res.json(newFlight);
};

// PUT /admin/flights/:id
exports.updateFlight = async(req,res)=>{
 if(!req.session.user||req.session.user.role!="admin"){
 return res.send("Access Denied");
 }

 const updatedFlight = await Flight.findByIdAndUpdate(
 req.params.id,
 {price:req.body.price},
 {new:true}
 );

 if(!updatedFlight){
 return res.send("Flight not found");
 }

 res.json(updatedFlight);
};

// DELETE /admin/flights/:id
exports.deleteFlight = async(req,res)=>{
 if(!req.session.user||req.session.user.role!="admin"){
 return res.send("Access Denied");
 }

 const deletedFlight = await Flight.findByIdAndDelete(req.params.id);

 if(!deletedFlight){
 return res.send("Flight not found");
 }

 res.json({deleted:true});
};

// GET /admin/reservations
exports.getAllReservations = async(req,res)=>{
 if(!req.session.user){
 return res.redirect("/login");
 }
 if(req.session.user.role!="admin"){
 return res.send("Access Denied");
 }

 const allReservations = await Reservation.find();

 res.render("admin-reservations",{
 reservations:allReservations
 });
};

// PATCH /admin/reservations/:id/status
exports.updateReservationStatus = async(req,res)=>{
 if(!req.session.user||req.session.user.role!="admin"){
 return res.send("Access Denied");
 }

 const updatedReservation = await Reservation.findByIdAndUpdate(
 req.params.id,
 {status:req.body.status},
 {new:true}
 );

 if(!updatedReservation){
 return res.send("Reservation not found");
 }

 res.json(updatedReservation);
};
