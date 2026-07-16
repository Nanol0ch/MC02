const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

router.get('/', reservationController.getMyReservations);
router.patch('/:id/seat', reservationController.updateSeat);
router.delete('/:id', reservationController.cancelReservation);

router.get('/flights', adminController.getFlights);
router.post('/flights', adminController.createFlight);
router.put('/flights/:id', adminController.updateFlight);
router.delete('/flights/:id', adminController.deleteFlight);

router.get('/reservations', adminController.getAllReservations);
router.patch('/reservations/:id/status', adminController.updateReservationStatus);

module.exports = router;
