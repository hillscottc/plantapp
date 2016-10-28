const supertest = require("supertest");
const should = require("should");
const server = supertest.agent("http://localhost:3001");


describe("BOOKSHELF",function() {

  it("plants-bs all", function (done) {
    server
        .get("/api/plants/")
        .expect("Content-type", /json/)
        .expect(200)
        .end(function (err, res) {
          const {data, pagination} = res.body;
          console.log({length: data.length, pagination});
          done();
        });
  });


  it("plants-bs search symbol", function (done) {
    const data = {symbol:'ABELM'};
    server
        .post("/api/plants/")
        .send(data)
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err, res){
          const {data, pagination} = res.body;
          console.log({length: data.length, pagination});
          const firstPlant = data[0];
          firstPlant.symbol.should.equal("ABELM");
          done();
        });
  });


  it("plants-bs musk okra query ",function(done){
    const data = {family:'Malva', common: 'musk'};
    server
        .post("/api/plants/")
        .send(data)
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err, res){
          const {data, pagination} = res.body;
          console.log({length: data.length, pagination});
          data.length.should.equal(2);
          done();
        });
  });

});

