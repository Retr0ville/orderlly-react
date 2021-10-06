/* eslint-disable semi */
const express = require('express');
const router = express.Router();
const pcAccControl = require('../controllers/pcAccessoriesController');

router.get('/', pcAccControl.pc_accessories_get);
router.get('/create-pc-accessory', pcAccControl.pc_accessory_create_get);
router.get('/:id', pcAccControl.pc_accessory_detail);
router.post('/', pcAccControl.pc_accessory_create_post);
router.delete('/:id', pcAccControl.pc_accessory_delete);

module.exports = router
