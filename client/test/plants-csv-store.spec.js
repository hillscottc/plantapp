/*
Test the plants-csv-store
 */
import {getPlantsList, getPlantsBySymbol, getPlantsByCommon} from '../src/stores/plants-csv-store'


describe("plants-csv-store test",function(){


  it("all plants",function(done){
    getPlantsList((plants) => {
      plants.length.should.be.above(5);
      done();
    });
  });

  it("plants by symbol",function(done){
    this.timeout(3000);

    getPlantsBySymbol('NAAM', (plants) => {
      plants.length.should.be.above(1);
      // console.log(plants);
      done();
    });
  });


  it("plants like common name ",function(done){
    this.timeout(5000);

    getPlantsByCommon('yarrow', (plants) => {
      plants.length.should.be.above(19);
      done();
    });
  });

});


