const supertest = require("supertest");
const should = require("should");
const config = require('../config');
const server = supertest.agent("http://localhost:3001");

const MAX = config.maxRecs;

describe("Plants api GET tests",function(){

  it("plants list",function(done){

    server
        .get("/api/plants")
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err, res){
          res.body.length.should.equal(MAX);
          should.not.exist(res.body.error);
          done();
        });
  });


  it("plant by id ",function(done){

    server
        .get("/api/plant/1")
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err, res){
          res.body.id.should.equal(1);
          should.not.exist(res.body.error);
          done();
        });
  });

  it("plants by symbol ",function(done){

    server
        .get("/api/plants/symbol/naam")
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err, res){
          // console.log(res.body.length);
          res.body.length.should.equal(4);
          should.not.exist(res.body.error);
          done();
        });
  });


  it("plants by synonym ",function(done){

    server
        .get("/api/plants/synonym/ABBAF")
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err, res){
          // console.log(res.body.length);
          res.body.length.should.equal(1);
          should.not.exist(res.body.error);
          done();
        });
  });

  it("plants LIKE family ",function(done){

    server
        .get("/api/plants/family/Pleo")
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err, res){
          // console.log(res.body.length);
          res.body.length.should.equal(14);
          should.not.exist(res.body.error);
          done();
        });
  });

  it("plants like common name ",function(done){

    server
        .get("/api/plants/common-name/okra")
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err, res){
          // console.log(res.body.length);
          res.body.length.should.equal(3);
          should.not.exist(res.body.error);
          done();
        });
  });


  it("plants like sci name ",function(done){

    server
        .get("/api/plants/sci-name/Abies")
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err, res){
          // console.log(res.body.length);
          res.body.length.should.equal(38);
          should.not.exist(res.body.error);
          done();
        });
  });

});


describe("Plants search query POST tests",function() {

  it("blank query",function(done){
    const data = {};
    console.log("query:", data);
    server
        .post("/api/plants/")
        .send(data)
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err, res){
          res.body.length.should.equal(MAX);
          done();
        });
  });

  it("order by family",function(done){
    const data = {order:'family'};
    console.log("query:", data);
    server
        .post("/api/plants/")
        .send(data)
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err, res) {
          const firstPlant = res.body[0];
          firstPlant.family.should.equal("Acanthaceae");
          res.body.length.should.equal(MAX);
          done();
        });
  });

  it("order by common_name, descending",function(done){
    const data = {order:'common_name DESC'};
    console.log("query:", data);
    server
        .post("/api/plants/")
        .send(data)
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err, res) {
          const firstPlant = res.body[0];
          firstPlant.common_name.should.equal("‘ilima");
          res.body.length.should.equal(MAX);
          done();
        });
  });

  it("family query",function(done){
    const data = {family:'Pleo'};
    console.log("query:", data);
    server
        .post("/api/plants/")
        .send(data)
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err, res){
          res.body.length.should.equal(14);
          done();
        });
  });


  it("okra query, order by symbol",function(done){
    const data = {family:'Malva', common: 'okra', order: 'symbol'};
    console.log("query:", data);
    server
        .post("/api/plants/")
        .send(data)
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err, res){
          const firstPlant = res.body[0];
          firstPlant.symbol.should.equal("ABELM");
          res.body.length.should.equal(3);
          done();
        });
  });

  it("musk okra query",function(done){
    const data = {family:'Malva', common: 'musk'};
    console.log("query:", data);
    server
        .post("/api/plants/")
        .send(data)
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err, res){
          res.body.length.should.equal(2);
          done();
        });
  });

  it("another okra query",function(done){
    const data = {sci:'Medik.', common: 'okra'};
    console.log("query:", data);
    server
        .post("/api/plants/")
        .send(data)
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err, res){
          res.body.length.should.equal(2);
          done();
        });
  });

});