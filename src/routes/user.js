const router = require('express').Router();
const request = require("../requests/user")

router.post('/register', request.register);
router.post('/login', request.login);

module.exports = router;
