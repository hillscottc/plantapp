const express = require('express');
const router = express.Router();


// GET /api/plants/{limit} -- plants with optional limit (10)
router.get('/plants/:limit?', (req, res) => {
  const limit = req.params.limit ? req.params.limit : 10;
  const results = [];
  return res.json(results);
});


// GET /api/plant/{id} -- plant id
router.get('/plant/:id', (req, res) => {



});



module.exports = router;
