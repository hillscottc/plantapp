const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

const PlantSchema = mongoose.model('plants', new mongoose.Schema({
  "Symbol" : String,
  "Synonym Symbol": String,
  "Scientific Name with Author": String,
  "Common Name": String,
  "Family": String
}));

// GET /api/plants/{limit} -- plants with optional limit (10)
router.get('/plants/:limit?', (req, res) => {

  const limit = req.params.limit || 10;

  const promise = PlantSchema.find({}).limit(parseInt(limit)).exec();

  promise.then(function(plants) {
    res.json(plants);
  })
  .catch(function(err){
    throw err;
  });

});


// GET /api/plant/{id} -- find by id
router.get('/plant/:id', (req, res) => {

  const promise = PlantSchema.findById(req.params.id).exec();

  promise.then(function(plants) {
    res.json(plants);
  })
  .catch(function(err){
    throw err;
  });

});


// POST /plants -- post a plants query
router.post('/plants', (req, res) => {
  const query = req.body;
  res.json({you_said: query});
});


module.exports = router;
