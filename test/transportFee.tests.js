import assert from "assert"
import transportFee from "../transportFee.js"

describe("Function should returns the right price based on the shift you are working", function(){

it("Should return 'R20' when called with transportFee('morning')", function(){

assert.equal(transportFee('morning'), 'R20')

})

it("Should return 'R10' when called with transportFee('afternoon')", function(){

    assert.equal(transportFee('afternoon'), 'R10')
    
    })

    it("Should return 'R20' when called with transportFee('morning')", function(){

        assert.equal(transportFee('nightshift'), 'free', 'For night shift return free')
        
        })

})