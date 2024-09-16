const express = require('express');
const router = express.Router();
const { Certificate } = require('../models'); // Asegúrate de tener un modelo Certificate definido

// Ruta para buscar certificados por RUN
router.get('/search', async (req, res) => {
  const { run } = req.query;
  try {
    const certificates = await Certificate.findAll({ where: { run } });
    res.json(certificates);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar certificados', error });
  }
});

module.exports = router;
