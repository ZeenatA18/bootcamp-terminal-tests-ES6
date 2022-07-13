import assert from "assert"
import fromWhere from "../fromWhere.js"

describe("Function should returns the town the car is from", function () {

    it("Should return 'Bellville' when called with fromWhere('CY')", function () {

        assert.equal(fromWhere('CY'), 'Bellville');


    })

    it("Should return 'Paarl' when called with fromWhere('CJ')", function () {

        assert.equal(fromWhere('CJ'), 'Paarl');


    })

    it("Should return 'Cape Town' when called with fromWhere('CA')", function () {

        assert.equal(fromWhere('CA'), 'Cape Town');


    })

    it("Should return 'Some other place!' when called with fromWhere('CC')", function () {

        assert.equal(fromWhere('CC'), 'Some other place!');

    })

})