const request = require('supertest');
const app = require('../app')
const {assert} = require('chai')


describe('POST /cities', function(){
  it('Must response with 201 status code', function(done){
    request(app)
      .post('/cities')
      .send({
        city: 'aaa',
        country: 'aaa',
        photo: 'https://static.eldiario.es/clip/71d118ff-5ef2-449c-be8a-6c321304fa70_16-9-aspect-ratio_default_0.jpg',
        population: 1123123,
        fundation: 1123123,
      })
      .expect(201)
      .end(function(err,res){
        if(err) return done(err);
        return done()
      })
  })

  it('Must response with 201 status code', function(done){
    request(app)
      .post('/cities')
      .send({
        city: 'aaa',
        country: 'aaa',
        photo: 'https://static.eldiario.es/clip/71d118ff-5ef2-449c-be8a-6c321304fa70_16-9-aspect-ratio_default_0.jpg',
        population: 1123123,
        fundation: 1123123,
      })
      .then(response => {
        assert.isString(response.body.id)
        done()
      })
  })

  it('Must response with 201 status code', function(done){
    request(app)
      .post('/cities')
      .send({})
      .expect(400)
      .end(function(err,res){
        if(err) return done(err);
        return done()
      })
  })
})

 describe("GET /cities", () => {
     it("Must respond with 200 status code", function (done) {
         request(app)
             .get("/cities")
             .expect(200)
             .end((err, res) => {
                 if (err) return done(err)
                 return done()
             })
     })
 })