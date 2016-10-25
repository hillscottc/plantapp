const supertest = require("supertest");
const should = require("should");
const chalk = require('chalk');

const server = supertest.agent("http://localhost:3001");


describe("Plants api GET tests",function(){

  it("plants list",function(done){

    server
        .get("/api/plants")
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err, res){
          res.body.length.should.equal(100);
          should.not.exist(res.body.error);
          done();
        });
  });

  it("plants list with limit",function(done){

    server
        .get("/api/plants/50")
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err, res){
          res.body.length.should.equal(50);
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
    server
        .post("/api/plants/")
        .send(data)
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err, res){
          res.body.length.should.equal(100);
          done();
        });
  });

  it("family query",function(done){
    const data = {family:'Pleo'};
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

  it("okra query",function(done){
    const data = {family:'Malva', common: 'okra'};
    server
        .post("/api/plants/")
        .send(data)
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err, res){
          res.body.length.should.equal(3);
          done();
        });
  });

  it("musk okra query",function(done){
    const data = {family:'Malva', common: 'musk'};
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