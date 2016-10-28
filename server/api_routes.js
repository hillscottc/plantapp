/**
 * Server routes at /api/
 */
const debug = require('debug')('plantapp:api');
const express = require('express');
const router = express.Router();
const Plant = require('./models/plant');


function parsePlantArgs({family, common, symbol, sci}) {
  family = family ? "%" + family + "%" : "";
  common = common ? "%" + common + "%" : "";
  sci = sci ? "%" + sci + "%" : "";
  symbol = symbol ? "%" + symbol.toUpperCase() + "%" : "";
  return {family, common, symbol, sci};
}





// GET plants all
router.get('/plants/', (req, res) => {
  Plant.forge()
      .query((qb) => {})
      // .fetchAll()
      .fetchPage({limit: 20, offset: 0})
      .then((plants) => {
        // return res.json(plants.toJSON())
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

  debug("Handling:", req.body);

  const {family, common, symbol, sci} = parsePlantArgs(req.body);

  Plant.forge()
      .query((qb) => {
        //qb is knex query builder
        if (symbol) qb.where('symbol', 'like', symbol);
        if (common) qb.where('common_name', 'like', common);
        if (family) qb.where('family', 'like', family);
        if (sci) qb.where('sci_name', 'like', sci);
      })
      .fetchPage({limit: 20, offset: 0})
      .then((plants) => {
        // return res.json(plants.toJSON())
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
