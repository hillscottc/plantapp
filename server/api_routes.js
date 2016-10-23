/**
 * Server routes at /api/
 */
const express = require('express');
const router = express.Router();
const config = require('../config');

const promise = require('bluebird');
const pgp = require('pg-promise')({promiseLib: promise});

var db = pgp(config.databaseUrl);

// maximum records returned
const MAX = 25;


// GET - some plants with optional limit
router.get('/plants/:limit?', (req, res) => {
  const limit = req.params.limit || MAX;
  db.any("SELECT * FROM plant LIMIT $1", [limit])
      .then(function (data) {
        return res.json(data);
      })
      .catch(function (error) {
        console.log("ERROR:", error);
      })
});


// POST QUERY
router.post('/plants/', (req, res) => {
  console.log("got POST data:", req.body);
  return res.json({ok:1});
});


// GET - by id
router.get('/plant/:id', (req, res) => {
  db.oneOrNone("SELECT * FROM plant WHERE id = $1", [req.params.id])
      .then(function (data) {
        return res.json(data);
      })
      .catch(function (error) {
        console.log("ERROR:", error);
      })
});


// GET - by symbol
router.get('/plants/symbol/:symbol', (req, res) => {
  db.any("SELECT * FROM plant WHERE symbol = $1", [req.params.symbol.toUpperCase()])
      .then(function (data) {
        return res.json(data);
      })
      .catch(function (error) {
        console.log("ERROR:", error);
      })
});

// GET - by synonym
router.get('/plants/synonym/:synonym', (req, res) => {
  db.any("SELECT * FROM plant WHERE synonym = $1", [req.params.synonym])
      .then(function (data) {
        return res.json(data);
      })
      .catch(function (error) {
        console.log("ERROR:", error);
      })
});


// GET - like family
router.get('/plants/family/:family', (req, res) => {
  db.any("SELECT * FROM plant WHERE family LIKE '%$1#%' LIMIT $2", [req.params.family, MAX])
      .then(function (data) {
        return res.json(data);
      })
      .catch(function (error) {
        console.log("ERROR:", error);
      })
});


// GET - like common name
router.get('/plants/common-name/:common', (req, res) => {
  db.any("SELECT * FROM plant WHERE common_name LIKE '%$1#%' LIMIT $2", [req.params.common, MAX])
      .then(function (data) {
        return res.json(data);
      })
      .catch(function (error) {
        console.log("ERROR:", error);
      })
});


// GET - like sci name
router.get('/plants/sci-name/:sci', (req, res) => {
  db.any("SELECT * FROM plant WHERE sci_name LIKE '%$1#%' LIMIT $2", [req.params.sci, MAX])
      .then(function (data) {
        return res.json(data);
      })
      .catch(function (error) {
        console.log("ERROR:", error);
      })
});


module.exports = router;
