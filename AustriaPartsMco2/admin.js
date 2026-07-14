const express = require('express');
const router = express.Router();
const adminController = require('../controller/adminController');

router.get('/admin/dashboard', adminController.getDashboard);
router.get('/admin/users', adminController.getUsersPage);

router.get('/admin/flights', adminController.getFlights);
router.post('/admin/flights', adminController.createFlight);
router.put('/admin/flights/:id', adminController.updateFlight);
router.delete('/admin/flights/:id', adminController.deleteFlight);

router.get('/admin/reservations', adminController.getAllReservations);
router.patch('/admin/reservations/:id/status', adminController.updateReservationStatus);

module.exports = router;
