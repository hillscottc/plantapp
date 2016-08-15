const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Plant = mongoose.model('plants', new Schema({
  "Symbol" : String,
  "Synonym Symbol": String,
  "Common Name": String,
  "Family": String
}));


// GET /api/plants/{limit} -- plants with optional limit (10)
router.get('/plants/:limit?', (req, res) => {
  const limit = req.params.limit ? req.params.limit : 10;
  const q = Plant.find({}).limit(parseInt(limit));
  q.exec(function(err, plants) {
    if (err) throw err;
    res.json(plants);
  });
});


// GET /api/plant/{id} -- plant id
router.get('/plant/:id', (req, res) => {

});



module.exports = router;
