const request = require('supertest');
const app = require('../app')
const {assert} = require('chai')

describe("PATCH /itineraries/:id", ()=>{
    
    it("Must respond with You have updated an itinerary.", (done)=>{
        request(app)
            .patch('/itineraries/632dbea69abaf06869e6cbe8')
            .send({
                name:'the best that you see',
                photo:'http://joa.jpg',
                price:20,
                likes:[],
                tags:2,
                duration:2,
            })
            .expect(200)
            .then((res) => {
                assert.isObject(res.body.response)
                done()
            })
    })

})