const request = require('supertest');
const app = require('../app')
const {assert} = require('chai')

describe('POST /cities', function(){
  it('Must response with 201 status code', function(done){
    request(app)
      .post('/itineraries')
      .send({
        name: 'asd',
        user: "61216a421cdd420a859051ca",
        city: "61216a421cdd420a859051ce",
        price: 1234,
        likes: ['asdf'],
        tags: ['asdf'],
        duration: 12345,
      })
      .expect(201)
      .end(function(err,res){
        if(err) return done(err);
        return done()
      })
  })

  it('Must response with 201 status code', function(done){
    request(app)
      .post('/itineraries')
      .send({
        name: 'asd',
        user: "61216a421cdd420a859051ca",
        city: "61216a421cdd420a859051ce",
        price: 1234,
        likes: ['asdf'],
        tags: ['asdf'],
        duration: 12345,
      })
      .then(response => {
        assert.isString(response.body.id)
        done()
      })
  })

  it('Must response with 201 status code', function(done){
    request(app)
      .post('/itineraries')
      .send({})
      .expect(400)
      .end(function(err,res){
        if(err) return done(err);
        return done()
      })
  })
})