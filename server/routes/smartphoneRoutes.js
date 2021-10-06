/* eslint-disable semi */
const express = require('express');
const router = express.Router();
const smartphoneControl = require('../controllers/smartphonesController');

router.get('/', smartphoneControl.smartphones_get);
router.get('/create-smartphone', smartphoneControl.smartphone_create_get);
router.get('/:id', smartphoneControl.smartphone_detail);
router.post('/', smartphoneControl.smartphone_create_post);
router.delete('/:id', smartphoneControl.smartphone_delete);

module.exports = router
