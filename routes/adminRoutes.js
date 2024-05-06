const express = require('express');
const { getAllUsers, deleteUser } = require('../controllers/adminController');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

// Middleware pour protéger toutes les routes d'admin
router.use(protect);
router.use(authorize('admin'));

router.get('/users', getAllUsers);
router.delete('/user/:id', deleteUser);

module.exports = router;
