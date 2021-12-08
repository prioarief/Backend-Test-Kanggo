const router = require('express').Router();
const userRoute = require('./user');
const productRoute = require('./product');
const { tokenCheck } = require('../middlewares/jwt');

router.use('/product', tokenCheck, productRoute);
router.use('/user', userRoute);

module.exports = router;
