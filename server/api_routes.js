/**
 * Server routes at /api/
 */
const express = require('express');
const promise = require('bluebird');
const pgp = require('pg-promise')({promiseLib: promise});
const SQL = require('sql-template-strings');
const router = express.Router();
const config = require('../config');

const db = pgp(config.databaseUrl);
const MAX = config.maxRecs;

// GET - some plants
router.get('/plants/', (req, res) => {
  db.any(SQL`SELECT * FROM plant LIMIT ${MAX}`)
      .then((data) => { return res.json(data) })
      .catch((error) => { console.error(error) })
});


// POST SEARCH QUERY
router.post('/plants/', (req, res) => {

  console.log("Handling:", req.body);

  let {family, common, symbol, sci} = req.body;
  family = family ? "%" + family + "%" : "";
  common = common ? "%" + common + "%" : "";
  sci = sci ? "%" + sci + "%" : "";
  symbol = symbol.toUpperCase();

  const sql = SQL`SELECT * FROM plant WHERE 1 = 1 `;

  if (family) {
    sql.append(SQL` AND family LIKE ${family}`);
  }
  if (common) {
    sql.append(SQL` AND common_name LIKE ${common}`);
  }
  if (sci) {
    sql.append(SQL` AND sci_name LIKE ${sci}`);
  }

  sql.append(SQL` LIMIT ${MAX}`);

  // console.log(sql.sql);
  // console.log(sql.values);

  db.any(sql)
      .then((data) =>  { return res.json(data) })
      .catch((error) => { console.error(error) })
});


// GET - by id
router.get('/plant/:id', (req, res) => {
  db.oneOrNone(SQL`SELECT * FROM plant WHERE id = ${req.params.id}`)
      .then((data) => { return res.json(data) })
      .catch((error) => { console.error(error) })
});


// GET - by symbol
router.get('/plants/symbol/:symbol', (req, res) => {
  let {symbol} = req.params;
  symbol = symbol.toUpperCase();
  db.any(SQL`SELECT * FROM plant WHERE symbol = ${symbol}`)
      .then((data) =>  { return res.json(data) })
      .catch((error) => { console.error(error) })
});

// GET - by synonym
router.get('/plants/synonym/:synonym', (req, res) => {
  const sql = SQL`SELECT * FROM plant WHERE synonym = ${req.params.synonym}`;
  db.any(sql)
      .then((data) =>  { return res.json(data) })
      .catch((error) => { console.error(error) })
});


// GET - like family
router.get('/plants/family/:family', (req, res) => {
  let {family} = req.params;
  family = "%" + family + "%";
  const sql = SQL`SELECT * FROM plant WHERE family LIKE ${family} LIMIT ${MAX}`.setName('get_family');
  db.any(sql)
      .then((data) =>  { return res.json(data) })
      .catch((error) => { console.error(error) })
});


// GET - like common name
router.get('/plants/common-name/:common', (req, res) => {
  let {common} = req.params;
  common = "%" + common + "%";
  const sql = SQL`SELECT * FROM plant WHERE common_name LIKE ${common} LIMIT ${MAX}`.setName('get_common');
  db.any(sql)
      .then((data) =>  { return res.json(data) })
      .catch((error) => { console.error(error) })
});


// GET - like sci name
router.get('/plants/sci-name/:sci', (req, res) => {
  let {sci} = req.params;
  sci = "%" + sci + "%";
  const sql = SQL`SELECT * FROM plant WHERE sci_name LIKE ${sci} LIMIT ${MAX}`.setName('get_sci');
  db.any(sql)
      .then(function (data) { return res.json(data) })
      .catch(function (error) { console.error(error) })
});


module.exports = router;
