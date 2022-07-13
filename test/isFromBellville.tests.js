import assert from "assert"
import isFromBellville from "../isFromBellville.js"


describe("function checking for bellville regNo's", function () {

    it("it should return 'true' when called with 'CY 123'", function () {

        assert.equal(true, isFromBellville('CY 123'))

    })
  
    it("it should return 'false' when called with 'CC 123'", function(){

        assert.equal(false, isFromBellville('CC 123'))

    })

    it("it should return 'true' when called with 'CY 1230'", function(){

        assert.equal(true, isFromBellville('CY 1230'))
        
    })

})