// backend/controllers/certificateController.js
const Certificate = require('../models/Certificate');

exports.getAllCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.findAll();
    res.json(certificates);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching certificates' });
  }
};

exports.createCertificate = async (req, res) => {
  try {
    const { name, type, dateIssued } = req.body;
    const newCertificate = await Certificate.create({ name, type, dateIssued });
    res.json(newCertificate);
  } catch (error) {
    res.status(500).json({ error: 'Error creating certificate' });
  }
};
