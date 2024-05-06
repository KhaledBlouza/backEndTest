const express = require('express');
const { getAllCoaches, getCoachById } = require('../controllers/coachController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').get(protect, getAllCoaches);
router.route('/:id').get(protect, getCoachById);

module.exports = router;
