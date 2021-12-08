const router = require('express').Router();
const request = require("../requests/product")

router.post('/', request.create);
router.get('/', request.gets);
router.get('/:id', request.get);
router.delete('/:id', request.destroy);
router.put('/:id', request.update);

module.exports = router;
