const request = require('supertest');
const app = require('../app')
const {assert} = require('chai')


describe('POST /auth', function(){
  it('Must response with 201 status code', function(done){
    request(app)
      .post('/auth/signup')
      .send({
        "name": "Facundo",
        "lastName": "Hernando",
        "mail": "faisheerrr00@gmail.com",
        "country": "Argentina",
        "photo": "asdf.jpg",
        "from": "form",
        "role": "admin",
        "password": "facundo1234"
      })
      .expect(201)
      .end(function(err,res){
        if(err) return done(err);
        return done()
      })
  })

  // Posible test: Cuando se cree un usuario con google retornar verificar si retorna true el verified.
})