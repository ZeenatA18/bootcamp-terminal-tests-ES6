import assert from "assert"
import findItemsOver20 from "../findItemsOver20.js"

describe('Function checks products with a quantity higher the 20', function () {

    it('Should return all the products that have a quantity higher than 20', function () {

        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];

        assert.deepEqual([{ name: 'pears', qty: 37 }, { name: 'bananas', qty: 27 }], findItemsOver20(itemList))

    })
    
    it('Should return all the products that have a quantity higher than 20', function () {

        var itemList2 = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 19},
            {name : 'bananas', qty : 17},
            {name : 'apples', qty : 3},
        ];

        assert.deepEqual([], findItemsOver20(itemList2))

    })

    it('Should return all the products that have a quantity higher than 20', function () {

        var itemList3 = [
            {name : 'apples', qty : 40},
            {name : 'pears', qty : 20},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ];

        assert.deepEqual([{name : 'apples', qty : 40}, {name : 'bananas', qty : 23}, {name : 'apples', qty : 37}], findItemsOver20(itemList3))

    })
    

})