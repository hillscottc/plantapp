const should = require("should");
const store = require('../src/stores/plants-csv-store');


describe("plants-csv-store test",function(){


  it("all plants",function(done){
    store.getAll((plants) => {
      plants.length.should.be.above(5);
      done();
    });
  });

  it("plants by symbol",function(done){
    this.timeout(3000);

    store.getBySymbol('NAAM', (plants) => {
      plants.length.should.be.above(1);
      done();
    });
  });


  it("plants like common name ",function(done){
    this.timeout(5000);

    store.getLikeCommon('yarrow', (plants) => {
      plants.length.should.be.above(19);
      done();
    });
  });

});


