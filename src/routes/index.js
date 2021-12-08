const router = require('express').Router();
const userRoute = require('./user');
const productRoute = require('./product');
const orderRoute = require('./order');
const paymentRoute = require('./payment');
const { tokenCheck } = require('../middlewares/jwt');

router.use('/payment', tokenCheck, paymentRoute);
router.use('/order', tokenCheck, orderRoute);
router.use('/product', tokenCheck, productRoute);
router.use('/user', userRoute);

module.exports = router;
