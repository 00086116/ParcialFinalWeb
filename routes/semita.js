const express = require('express');
const router = express.Router();
const semitaController = require('../controllers/SemitaController');

router.get('/', semitaController.index);
router.post('/', semitaController.insert);
router.delete('/', semitaController.delete);

module.exports = router;