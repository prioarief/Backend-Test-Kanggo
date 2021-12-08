const router = require('express').Router();
const userRoute = require('./user');
const productRoute = require('./product');

router.use('/product', productRoute);
router.use('/user', userRoute);

module.exports = router;
