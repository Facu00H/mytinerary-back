const request = require('supertest');
const app = require('../app')
const {assert} = require('chai')


describe('POST /cities', function(){
  it('Must response with 201 status code', function(done){
    request(app)
      .post('/auth')
      .send({
        name: 'asd',
        lastName: 'dsa',
        mail: 'asdfasdfas',
        password: 'asdfasdf',
        photo: 'asdf',
        country: 'asdf',
      })
      .expect(201)
      .end(function(err,res){
        if(err) return done(err);
        return done()
      })
  })

  it('Must response with 201 status code', function(done){
    request(app)
      .post('/auth')
      .send({
        name: 'asd',
        lastName: 'dsa',
        mail: 'asdfasdfas',
        password: 'asdfasdf',
        photo: 'asdf',
        country: 'asdf',
      })
      .then(response => {
        assert.isString(response.body.id)
        done()
      })
  })

  it('Must response with 201 status code', function(done){
    request(app)
      .post('/auth')
      .send({})
      .expect(400)
      .end(function(err,res){
        if(err) return done(err);
        return done()
      })
  })
})