/**
 * Server routes at /api/
 */
const debug = require('debug')('plantapp:api');
const express = require('express');
const router = express.Router();
const Plant = require('./models/plant');

/**
 * Sets a knex query builder object for given search params.
 * @param qb a knex query builder
 * @param queryArgs for plants
 */
function setPlantsQuery(qb, queryArgs) {
  let {family, common, symbol, sci} = queryArgs;

  family = family ? "%" + family + "%" : "";
  common = common ? "%" + common + "%" : "";
  sci = sci ? "%" + sci + "%" : "";
  symbol = symbol ? "%" + symbol.toUpperCase() + "%" : "";

  if (symbol) qb.where('symbol', 'like', symbol);
  if (common) qb.where('common_name', 'like', common);
  if (family) qb.where('family', 'like', family);
  if (sci) qb.where('sci_name', 'like', sci);
}

// GET plants all
router.get('/plants/', (req, res) => {

  const {family, common, symbol, sci, limit, offset} = req.query;

  Plant.forge()
      .query((qb) => {
        //qb is knex query builder
        setPlantsQuery(qb, {family, common, symbol, sci});
      })
      // .fetchPage({})
      .fetchPage({limit, offset})
      .then((plants) => {
        return res.json({
          data: plants.toJSON(),
          pagination: plants.pagination
        })
      })
      .catch((err) => {
        return res.status(500).json({error: true, data: {message: err.message}});
      });
});


// POST QUERY
// Accepts post of search args to return plant records.
router.post('/plants/', (req, res) => {

  const {family, common, symbol, sci, limit, offset} = req.body;

  debug("Handling POST:", req.body);

  Plant.forge()
      .query((qb) => {
        //qb is knex query builder
        setPlantsQuery(qb, {family, common, symbol, sci});
      })
      .fetchPage({limit, offset})
      .then((plants) => {
        return res.json({
          data: plants.toJSON(),
          pagination: plants.pagination
        })
      })
      .catch((err) => {
        return res.status(500).json({error: true, data: {message: err.message}});
      });

});


module.exports = router;
