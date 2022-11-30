const express = require('express');
const router = express.Router();
const apiRoutes = require('../controller/user.controller');
const checklogin = require('../middlewares/checkLogin');
router.get('', apiRoutes.getAllUser);
router.get('/:id', checklogin, apiRoutes.getOneUser);
router.put('/:id', checklogin,apiRoutes.updateOneUser);
router.delete('/:id',checklogin, apiRoutes.deleteOneUser);
module.exports = router;
