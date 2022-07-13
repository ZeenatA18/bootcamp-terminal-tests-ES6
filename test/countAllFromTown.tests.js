import assert from 'assert'
import allFromTown from '../countAllFromTown.js'

describe("Function should return all the registration numbers in the string that is for that town", function () {

    it("Should return 'CL 124', 'CL 345', 'CL 341' when called with 'fromStellies'", function () {

        var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL');

        assert.deepEqual(fromStellies, ['CL 124', 'CL 345', 'CL 341'])

    })

    it("Should return 'CJ 456' when called with 'fromStellies'", function () {

        var fromStellies = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CJ');

        assert.deepEqual(fromStellies, ['CJ 456']);

    })

    it("Should return [] 'None from Kuilsriver' when called with 'fromKuilsriver'", function () {

        var fromKuilsriver = allFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CF');

        assert.deepEqual(fromKuilsriver, [], 'None from Kuilsriver');
    })

})