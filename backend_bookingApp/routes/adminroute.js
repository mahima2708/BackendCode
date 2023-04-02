const path = require('path');

const express = require('express');

const file = require('../controllers/admin');

const router = express.Router();

router.get('/', file.sendHtmlFile);
router.post('/',file.addUser);
router.get('/data',file.getDatafromSql);
router.delete('/data/:id',file.deleteData);

module.exports= router;