const supertest = require("supertest");
const should = require("should");
const chalk = require('chalk');

const server = supertest.agent("http://localhost:3001");


describe("Plants api test",function(){


  it("plants list",function(done){

    server
        .get("/api/plants")
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err, res){
          res.body.length.should.equal(25);
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
        .get("/api/plants/symbol/NAAM")
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

  it("plants by family ",function(done){

    server
        .get("/api/plants/family/Pinaceae")
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err, res){
          // console.log(res.body.length);
          res.body.length.should.equal(25);
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
          res.body.length.should.equal(25);
          should.not.exist(res.body.error);
          done();
        });
  });

  it("plants POST ",function(done){
    const data = {foo:"bar"};
    server
        .post("/api/plants/")
        .send(data)
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err, res){
          console.log(res.body);
          done();
        });
  });


});