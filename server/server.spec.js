const supertest = require("supertest");
const should = require("should");
const querystring = require('querystring');

const server = supertest.agent("http://localhost:3001");


describe("BOOKSHELF GET TEST",function() {

  it("plants all", function (done) {
    server
        .get("/api/plants/")
        .expect("Content-type", /json/)
        .expect(200)
        .end(function (err, res) {
          const {data, pagination} = res.body;
          data.length.should.equal(10);
          pagination.rowCount.should.equal(90986);
          done();
        });
  });


  it("plants query", function (done) {

    const payload = {family:'Malva', common: 'musk'};

    server
        .get("/api/plants/?" + querystring.stringify(payload))
        .expect("Content-type", /json/)
        .expect(200)
        .end(function (err, res) {
          res.body.data.length.should.equal(2);
          done();
        });
  });


});


describe("BOOKSHELF POST TEST",function() {


  it("plants search all", function (done) {
    const payload = {};
    server
        .post("/api/plants/")
        .send(payload)
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err, res){
          const {data, pagination} = res.body;
          data.length.should.equal(10);
          pagination.rowCount.should.equal(90986);
          done();
        });
  });


  it("plants search symbol", function (done) {

    const payload = {symbol:'ABELM'};

    server
        .post("/api/plants/")
        .send(payload)
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


  it("plants musk okra query ",function(done) {

    const payload = {family:'Malva', common: 'musk'};

    server
        .post("/api/plants/")
        .send(payload)
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err, res){
          res.body.data.length.should.equal(2);
          done();
        });
  });

});






