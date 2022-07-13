import assert from "assert"
import countRegNumber from "../countRegNumber.js"

describe("Function should returns the number of registration numbers in the string.",function(){

it("It should return '3' when called with 'CA 182736,CY 523519,CJ 812328'", function(){

    assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);

})

it("It should return '1' when called with 'CA 182736'", function(){

    assert.equal(countRegNumber('CA 182736'), 1);

})

it("It should return '4' when called with 'CA 182736,CA 182736,CY 523519,CJ 812328'", function(){

    assert.equal(countRegNumber('CA 182736,CA 182736,CY 523519,CJ 812328'), 4);

})

})