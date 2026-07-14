// routes/bookingRoutes.js
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Cleanly map the URL endpoints to your controller functions
router.get('/booking/:flightId', bookingController.getBookingPage);
router.get('/api/flights/:id/occupied-seats', bookingController.getOccupiedSeats);
router.post('/bookings', bookingController.submitBooking);

module.exports = router;
