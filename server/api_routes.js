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


const MAX = 25;

// GET - some plants with optional limit (10)
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


// GET - by id
router.get('/plant/:id', (req, res) => {
  const promise = PlantSchema.findById(req.params.id).exec();
  promise.then(function(plants) {
    res.json(plants);
  })
  .catch(function(err){
    throw err;
  });

});


// GET - by symbol
router.get('/plants/symbol/:symbol', (req, res) => {
  const promise = PlantSchema.find({Symbol: req.params.symbol.toUpperCase()}).limit(MAX).exec();
  promise.then(function(plants) {
    res.json(plants);
  })
  .catch(function(err){
    throw err;
  });
});


// GET - by synonym
router.get('/plants/synonym/:synonym', (req, res) => {
  const promise = PlantSchema.find({"Synonym Symbol": req.params.synonym.toUpperCase()}).limit(MAX).exec();
  promise.then(function(plants) {
    res.json(plants);
  })
  .catch(function(err){
    throw err;
  });
});


// GET - like family
router.get('/plants/family/:family', (req, res) => {
  const regexQuery = new RegExp(req.params.family, "i");
  const promise = PlantSchema.find({"Family": regexQuery}).limit(MAX).exec();
  promise.then(function(plants) {
    res.json(plants);
  })
  .catch(function(err){
    throw err;
  });
});


// GET - like common name
router.get('/plants/common-name/:common', (req, res) => {
  const regexQuery = new RegExp(req.params.common, "i");
  const promise = PlantSchema.find({"Common Name": regexQuery}).limit(MAX).exec();
  promise.then(function(plants) {
    res.json(plants);
  })
  .catch(function(err){
    throw err;
  });
});


// GET - like sci name
router.get('/plants/sci-name/:sci', (req, res) => {
  const regexQuery = new RegExp(req.params.sci, "i");
  const promise = PlantSchema.find({"Scientific Name with Author": regexQuery}).limit(MAX).exec();
  promise.then(function(plants) {
    res.json(plants);
  })
  .catch(function(err){
    throw err;
  });
});


// POST /plants -- post a plants query
router.post('/plants', (req, res) => {
  const promise = PlantSchema.find(req.body).limit(MAX).exec();
  promise.then(function(plants) {
    res.json(plants);
  })
  .catch(function(err){
    throw err;
  });
});


module.exports = router;
