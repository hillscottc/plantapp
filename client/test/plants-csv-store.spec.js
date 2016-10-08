/*
Test the plants-csv-store
 */
import { queryPlants} from '../src/stores/plants-csv-store'


describe("Test plants-csv-store",function(){

  it("queryPlants, all",function(done){
    queryPlants().then((plants) => {
      plants.length.should.be.above(19);
      done();
    });
  });


  it("queryPlants by symbol",function(done){
    queryPlants('symbol', 'NAAM').then((plants) => {
      plants.length.should.be.above(1);
      done();
    });
  });


  it("queryPlants, all",function(done){
    queryPlants().then((plants) => {
      plants.length.should.be.above(19);
      done();
    });
  });


  it("queryPlants by common",function(done){
    queryPlants('common', 'yarrow').then((plants) => {
      plants.length.should.be.above(19);
      done();
    });
  });


  it("queryPlants by family",function(done){
    queryPlants('family', 'liliaceae').then((plants) => {
      plants.length.should.be.above(50);
      done();
    });
  });

});




