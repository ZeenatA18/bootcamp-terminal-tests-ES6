import assert from "assert"
import regCheck from "../regCheck.js"

describe("Check if a registration number is for GP, L registration plates", function () {

    it("it should return 'true' when called with 'GP'", function () {

        assert.equal(true, regCheck('RG 45 HN GP', 'GP'))

    })

    it("it should return 'true' when called with 'L'", function () {

        assert.equal(true, regCheck('FGT 491 L', 'L'))

    })

    it("it should return 'false' when called with 'ND'", function () {

        assert.equal(false, regCheck('ND 123-456', 'ND'))

    })

    it("it should return 'false' when called with 'CA'", function () {

        assert.equal(false, regCheck('CA 1234-123', 'CA'))

    })

})