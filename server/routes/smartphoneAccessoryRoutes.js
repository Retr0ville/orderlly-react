/* eslint-disable semi */
const express = require('express');
const router = express.Router();
const smartphoneAccControl = require('../controllers/smartphoneAccessoriesController');

router.get('/', smartphoneAccControl.smartphone_accessories_get);
router.get('/create-smartphone-accessory', smartphoneAccControl.smartphone_accessory_create_get);
router.get('/:id', smartphoneAccControl.smartphone_accessory_detail);
router.post('/', smartphoneAccControl.smartphone_accessory_create_post);
router.delete('/:id', smartphoneAccControl.smartphone_accessory_delete);

module.exports = router
