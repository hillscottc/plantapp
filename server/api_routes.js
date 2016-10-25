/**
 * Server routes at /api/
 */
const express = require('express');
const promise = require('bluebird');
const SQL = require('sql-template-strings');
const router = express.Router();
const config = require('../config');
const pgp = require('pg-promise')({promiseLib: promise});

var db = pgp(config.databaseUrl);

// maximum records returned
const MAX = 100;

// GET - some plants with optional limit
router.get('/plants/:limit?', (req, res) => {
  const limit = req.params.limit || MAX;
  db.any(SQL`SELECT * FROM plant LIMIT ${limit}`)
      .then(function (data) {
        return res.json(data);
      })
      .catch(function (error) {
        console.log("ERROR:", error);
      })
});


// POST SEARCH QUERY
router.post('/plants/:limit?', (req, res) => {
  console.log("got POST data:", req.body);
  const limit = parseInt(req.params.limit) || MAX;

  let {family, common, sci} = req.body;
  family = family ? "%" + family + "%" : "";
  common = common ? "%" + common + "%" : "";
  sci = sci ? "%" + sci + "%" : "";

  let sql = SQL`SELECT * FROM plant WHERE 1 = 1 `;
  if (family) {
    sql.append(SQL` AND family LIKE ${family}`)
  }
  if (common) {
    sql.append(SQL` AND common_name LIKE ${common}`)
  }
  if (sci) {
    sql.append(SQL` AND sci_name LIKE ${sci}`)
  }

  sql.append(SQL` LIMIT ${limit}`);

  console.log(sql.sql);
  console.log(sql.values);

  db.any(sql)
      .then(function (data) {
        return res.json(data);
      })
      .catch(function (error) {
        console.log("ERROR:", error);
      })
});


// GET - by id
router.get('/plant/:id', (req, res) => {
  const {id} = req.params;
  db.oneOrNone(SQL`SELECT * FROM plant WHERE id = ${id}`)
      .then(function (data) {
        return res.json(data);
      })
      .catch(function (error) {
        console.log("ERROR:", error);
      })
});


// GET - by symbol
router.get('/plants/symbol/:symbol', (req, res) => {
  let {symbol} = req.params;
  symbol = symbol.toUpperCase();
  db.any(SQL`SELECT * FROM plant WHERE symbol = ${symbol}`)
      .then(function (data) {
        return res.json(data);
      })
      .catch(function (error) {
        console.log("ERROR:", error);
      })
});

// GET - by synonym
router.get('/plants/synonym/:synonym', (req, res) => {
  const {synonym} = req.params;
  const sql = SQL`SELECT * FROM plant WHERE synonym = ${synonym}`;
  db.any(sql)
      .then(function (data) {
        return res.json(data);
      })
      .catch(function (error) {
        console.log("ERROR:", error);
      })
});


// GET - like family
router.get('/plants/family/:family', (req, res) => {
  let {family} = req.params;
  family = "%" + family + "%";
  const sql = SQL`SELECT * FROM plant WHERE family LIKE ${family} LIMIT ${MAX}`.setName('get_family');
  db.any(sql)
      .then(function (data) {
        return res.json(data);
      })
      .catch(function (error) {
        console.log("ERROR:", error);
      })
});


// GET - like common name
router.get('/plants/common-name/:common', (req, res) => {
  let {common} = req.params;
  common = "%" + common + "%";
  const sql = SQL`SELECT * FROM plant WHERE common_name LIKE ${common} LIMIT ${MAX}`.setName('get_common');
  db.any(sql)
      .then(function (data) {
        return res.json(data);
      })
      .catch(function (error) {
        console.log("ERROR:", error);
      })
});


// GET - like sci name
router.get('/plants/sci-name/:sci', (req, res) => {
  let {sci} = req.params;
  sci = "%" + sci + "%";
  const sql = SQL`SELECT * FROM plant WHERE sci_name LIKE ${sci} LIMIT ${MAX}`.setName('get_sci');
  db.any(sql)
      .then(function (data) {
        return res.json(data);
      })
      .catch(function (error) {
        console.log("ERROR:", error);
      })
});


module.exports = router;
