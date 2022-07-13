import assert from "assert"
import findItemsOver from "../findItemsOver.js"

describe('The function should return products that have quantity higher than the threshold.', function () {

    it('Should return all the products that have a quantity higher than the threshold', function () {

        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];

        assert.deepEqual([{ name: 'pears', qty: 37 }, { name: 'bananas', qty: 27 }], findItemsOver(itemList, 20))

    })
    
    it('Should return all the products that have a quantity higher than the threshold', function () {

        var itemList2 = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 19},
            {name : 'bananas', qty : 17},
            {name : 'apples', qty : 3},
        ];

        assert.deepEqual([], findItemsOver(itemList2, 20))

    })

    it('Should return all the products that have a quantity higher than the threshold', function () {

        var itemList3 = [
            {name : 'apples', qty : 40},
            {name : 'pears', qty : 20},
            {name : 'bananas', qty : 23},
            {name : 'apples', qty : 37}
        ];

        assert.deepEqual([{name : 'apples', qty : 40}, {name : 'bananas', qty : 23}, {name : 'apples', qty : 37}], findItemsOver(itemList3, 20))

    })

})