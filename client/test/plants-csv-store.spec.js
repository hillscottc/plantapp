/*
Test the plants-csv-store
 */
import {getAll, getBySymbol, getLikeCommon} from '../src/stores/plants-csv-store'


describe("plants-csv-store test",function(){


  it("all plants",function(done){
    getAll((plants) => {
      plants.length.should.be.above(5);
      done();
    });
  });

  it("plants by symbol",function(done){
    this.timeout(3000);

    getBySymbol('NAAM', (plants) => {
      plants.length.should.be.above(1);
      // console.log(plants);
      done();
    });
  });


  it("plants like common name ",function(done){
    this.timeout(5000);

    getLikeCommon('yarrow', (plants) => {
      plants.length.should.be.above(19);
      done();
    });
  });

});


