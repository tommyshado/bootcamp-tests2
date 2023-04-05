describe('findItemsOver20', () => {
    it('is a function', () => {
        assert.equal(typeof findItemsOver20, 'function')
    })

    it('returns an array of items greater that has quantity > 20', () => {
        let itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3}
        ];
        assert.deepEqual(findItemsOver20(itemList),[{"name":"pears","qty":37},{"name":"bananas","qty":27}])
    })

    it('returns an array of items greater that has quantity > 20', () => {
        let itemList = [
            {name : 'apples', qty : 30},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 25}
        ];
        assert.deepEqual(findItemsOver20(itemList),[{name : 'apples', qty : 30},{name:"pears","qty":37},{name:"bananas", qty: 27},{name: 'apples', qty: 25}])
    })

    it('returns an empty array for when there are no items over 20', () => {
        let itemList = [
            {name: 'apples', qty: 10},
            {name: 'oranges', qty: 18}
        ]

        assert.deepEqual(findItemsOver20(itemList), [])
    })

})