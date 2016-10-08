/*
Test the plants-csv-store
 */
import {getPlantsList, getPlantsBySymbol,
    getPlantsListAsync, getPlantsByCommon} from '../src/stores/plants-csv-store'


describe("plants-csv-store test",function(){


  it("all plants",function(done){
    getPlantsList().then((plants) => {
      plants.length.should.be.above(5);
      done();
    })
  });


  it("plants by symbol",function(done){
    this.timeout(3000);

    getPlantsBySymbol('NAAM').then((plants) => {
      plants.length.should.be.above(1);
      done();
    })

  });


  it("plants like common name ",function(done){
    this.timeout(5000);

    getPlantsByCommon('yarrow').then((plants) => {
      plants.length.should.be.above(19);
      done();
    });
  });

});


