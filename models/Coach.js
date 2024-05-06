const mongoose = require('mongoose');

const coachSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    specialties: [{ type: String }],
    rates: { type: Number },
    bio: { type: String },
    availableTimes: [{ day: String, from: String, to: String }]
});

module.exports = mongoose.model('Coach', coachSchema);
