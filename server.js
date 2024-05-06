const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const coachRoutes = require('./routes/coachRoutes');

dotenv.config();  // Charge les variables d'environnement
connectDB();  // Connecte à la base de données

const app = express();
app.use(express.json());
app.use('/api/coaches', coachRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
