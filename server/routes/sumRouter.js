const router = require('express').Router();
const sumController = require('../controllers/sumCtrl');

router.post('/', sumController.toAdd);

module.exports = router;
