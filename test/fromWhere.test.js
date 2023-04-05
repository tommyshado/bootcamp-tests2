describe('fromWhere', () => {
    it('is a function', () => {
        assert.equal(typeof fromWhere, 'function')
    })

    it('returns the town name for Bellville', () => {
        assert.equal(fromWhere('CY 25313'), 'Bellville')
    })

    it('returns the town name for Paarl', () => {
        assert.equal(fromWhere('CJ 3253'), 'Paarl')
    })

    it('returns the town name for Cape Town', () => {
        assert.equal(fromWhere('CA 124'), 'Cape Town')
    })

    it('returns some other place', () => {
        assert.equal(fromWhere('CK 1234'), 'Some other place!')
    })
})