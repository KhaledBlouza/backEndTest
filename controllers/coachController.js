const Coach = require('../models/Coach');

exports.getAllCoaches = async (req, res) => {
    try {
        const coaches = await Coach.find().populate('user', 'name email');
        res.status(200).json({ success: true, data: coaches });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.getCoachById = async (req, res) => {
    try {
        const coach = await Coach.findById(req.params.id).populate('user', 'name email');
        if (!coach) {
            return res.status(404).json({ success: false, error: 'No coach found with this id' });
        }
        res.status(200).json({ success: true, data: coach });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
