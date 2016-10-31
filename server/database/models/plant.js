import Bookshelf from '../bookshelf-db';

Bookshelf.plugin('pagination');

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


const Plant = Bookshelf.Model.extend({
  tableName: 'plant',
});


module.exports = {
  Plant: Plant,
  setPlantsQuery: setPlantsQuery
};




