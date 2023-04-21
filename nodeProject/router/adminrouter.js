const express = require('express');
const router = express.Router();
const routeControlfile = require('../controller/adminController');
const path = require('path');
router.get('/',routeControlfile.fileSend);
router.post('/',routeControlfile.addUser);
router.get('/data',routeControlfile.getdAta);
router.get('/sum',routeControlfile.getColumnSum);
router.delete('/:id',routeControlfile.delUser);

module.exports= router;