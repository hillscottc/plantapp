const store = require('./plants-csv-store');


console.log("TESTING.");

store.getBySymbol('NAAM', (matches) => {
  console.log(matches);
});


store.getAll((plants) => {
  console.log(plants);
});



