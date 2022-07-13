import assert from 'assert'
import allPaarl from '../countAllPaarl.js'

describe("Function should return number of registration numbers in the string for Paarl", function () {

    it("Should return '2' when called with 'allPaarl(regNumbers)'", function () {

        assert.equal(2, allPaarl('CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864').length, 'There are two registration numbers')

    })

    it("Should return '4' when called with 'allPaarl(regNumbers)'", function () {

        assert.equal(4, allPaarl('CJ 900, CJ 678 543, CJ 34567, CJ 67890, CN 7864').length, 'There are four registration numbers')

    })

    it("Should return '0' when called with 'allPaarl(regNumbers)'", function () {

        assert.equal(0, allPaarl('CL 900, CC 678 543, CA 34567, CA 67890, CN 7864').length, 'There are four registration numbers')

    })

})