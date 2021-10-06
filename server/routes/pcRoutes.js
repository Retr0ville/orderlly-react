/* eslint-disable semi */
const express = require('express');
const router = express.Router();
const pcControl = require('../controllers/pcsController');

router.get('/', pcControl.pcs_get);
router.get('/create-pc', pcControl.pc_create_get);
router.get('/:id', pcControl.pc_detail);
router.post('/', pcControl.pc_create_post);
router.delete('/:id', pcControl.pc_delete);

module.exports = router
