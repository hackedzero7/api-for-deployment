const express = require('express');
const { messagefromIntrusredUser } = require('../controllers/interustedUserController');
const router = express.Router();

router.route('/interusteduser/:id').post(messagefromIntrusredUser);

module.exports = router;
