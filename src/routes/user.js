const router = require('express').Router();
const request = require("../requests/user")

router.post('/register', request.register);

module.exports = router;
