
const express = require('express');

const router = express.Router();
const reviewController = require('../controllers/reviews');

router.post('/', reviewController.create);
router.get('/', reviewController.list);
router.get('/:id', reviewController.retrieve);
router.put('/:id', reviewController.update);
router.delete('/:id', reviewController.destroy);

module.exports = router;
