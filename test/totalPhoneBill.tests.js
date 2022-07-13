import assert from "assert"
import totalPhoneBill from "../totalPhoneBill.js"

describe("Function should calculate the total bill for the data provided", function () {

    it("Should return 'R7.45' when called with totalPhoneBill(totalPhone)", function () {

        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));

    })

    it("Should return 'R3.40' when called with totalPhoneBill(totalPhone)", function () {

        assert.equal('R3.40', totalPhoneBill('call, sms'));

    })

    it("Should return 'R1.30' when called with totalPhoneBill(totalPhone)", function () {

        assert.equal('R1.30', totalPhoneBill('sms, sms'));

    })

})