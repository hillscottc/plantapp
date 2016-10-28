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
          // console.log(res.body);
          // console.log(res.body.length);
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
          // console.log(res.body);
          // console.log(res.body.length);
          const firstPlant = res.body[0];
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
          // const firstPlant = res.body[0];
          // console.log(firstPlant);
          res.body.length.should.equal(2);
          done();
        });
  });

});

