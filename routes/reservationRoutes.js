const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

router.get('/reservations', reservationController.getMyReservations);
router.patch('/reservations/:id/seat', reservationController.updateSeat);
router.delete('/reservations/:id', reservationController.cancelReservation);

module.exports = router;
