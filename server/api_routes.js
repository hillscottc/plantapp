/**
 * Server routes at /api/
 */
const debug = require('debug')('plantapp:api');
import {Plant, setPlantsQuery} from './database/models/plant';
import express from 'express';

const router = express.Router();

// GET plants all
router.get('/plants/', (req, res) => {

  const {family, common, symbol, sci, limit, offset} = req.query;

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
