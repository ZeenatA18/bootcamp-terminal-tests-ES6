import assert from "assert"
import yearsAgo from "../yearsAgo.js"

describe("Function should return how many years ago from given year to current year", function(){

it("Should return '46' when called with 'years.getFullYear()-year'",function(){

assert.equal(46, yearsAgo(1976))

})

it("Should return '92' when called with 'years.getFullYear()-year'",function(){

    assert.equal(92, yearsAgo(1930))
    
    })

    it("Should return '222' when called with 'years.getFullYear()-year'",function(){

        assert.equal(222, yearsAgo(1800))
        
        })


})