// backend/index.js
const express = require('express');
const app = express();
const port = 3001;
const certificateRoutes = require('./routes/certificateRoutes');
const sequelize = require('./config/database');
const Certificate = require('./models/Certificate');

app.use(express.json());
app.use('/api', certificateRoutes);

// Sincronizar la base de datos
sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
  });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
