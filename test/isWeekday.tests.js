import assert from "assert"
import isWeekday from "../isWeekday.js"

describe("Function needs to find out if the parameter passed in is a day of the week", function () {

    it("It should return 'true' when called with 'Monday'", function () {

        assert.equal(isWeekday('Monday'), true)

    })

    it("It should return 'true' when called with 'Tuesday'", function () {

        assert.equal(isWeekday('Tuesday'), true)

    })

    it("It should return 'false' when called with 'Sunday'", function () {

        assert.equal(isWeekday('Sunday'), false)

    })

    it("It should return 'true' when called with 'Thursday'", function () {

        assert.equal(isWeekday('Thursday'), true)

    })

    it("It should return 'false' when called with 'Saterday'", function () {

        assert.equal(isWeekday('Saterday'), false)

    })


    it("It should return 'true' when called with 'Friday'", function () {

        assert.equal(isWeekday('Friday'), true)

    })

    it("It should return 'true' when called with 'Wednesday'", function () {

        assert.equal(isWeekday('Wednesday'), true)

    })


})