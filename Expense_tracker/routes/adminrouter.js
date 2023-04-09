const express = require('express');
const router = express.Router();
const routeControlfile = require('../controller/routeControl');
const path = require('path');
router.get('/',routeControlfile.fileSend);
router.post('/',routeControlfile.addUser);
router.get('/data',routeControlfile.getdAta);
router.delete('/:id',routeControlfile.delUser);

module.exports= router;