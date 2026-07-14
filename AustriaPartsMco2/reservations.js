const express = require('express');
const router = express.Router();
const reservationsController = require('../controller/reservationsController');

router.get('/reservations', reservationsController.getMyReservations);
router.patch('/reservations/:id/seat', reservationsController.updateSeat);
router.delete('/reservations/:id', reservationsController.cancelReservation);

module.exports = router;
