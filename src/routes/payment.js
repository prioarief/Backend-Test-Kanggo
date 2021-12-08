const router = require('express').Router();
const request = require("../requests/payment")

router.post('/', request.create);

module.exports = router;
