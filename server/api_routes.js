/**
 * Server routes at /api/
 */
const debug = require('debug')('plantapp:api');
const express = require('express');
const router = express.Router();
const Plant = require('./models/plant');


// GET plants all
router.get('/plants/', (req, res) => {
  Plant.forge()
      .query((qb) => {
        //qb is knex query builder
        qb.offset(0).limit(10);
      })
      .fetchAll()
      .then((plants) => {
        return res.json(plants.toJSON())
      })
      .catch((err) => {
        return res.status(500).json({error: true, data: {message: err.message}});
      });
});


// POST QUERY
// Accepts post of search args to return plant records.
router.post('/plants/', (req, res) => {

  console.log("Handling:", req.body);

  let {family, common, symbol, sci} = req.body;
  family = family ? "%" + family + "%" : "";
  common = common ? "%" + common + "%" : "";
  sci = sci ? "%" + sci + "%" : "";
  symbol = symbol ? "%" + symbol.toUpperCase() + "%" : "";

  Plant.forge()
      .query((qb) => {
        //qb is knex query builder
        qb.offset(0).limit(10);
        if (symbol) qb.where('symbol', 'like', symbol);
        if (common) qb.where('common_name', 'like', common);
        if (family) qb.where('family', 'like', family);
        if (sci) qb.where('sci_name', 'like', sci);
      })
      .fetchAll()
      .then((plants) => {
        return res.json(plants.toJSON())
      })
      .catch((err) => {
        return res.status(500).json({error: true, data: {message: err.message}});
      });

});


module.exports = router;
