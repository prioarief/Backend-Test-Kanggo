const router = require('express').Router();
const request = require("../requests/payment")

router.post('/', request.create);
router.get('/', request.gets);
router.get('/:id', request.get);

module.exports = router;
