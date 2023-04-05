// Write a function called isFromBellville that returns true if a registration number is for Bellville otherwise returns false. 
// Registration numbers for Bellville starts with CY.

describe('isFromBellvile', () => {
    it('is a function', () => {
        assert.equal(typeof isFromBellville, 'function');
    });

    it('returns the boolean true if the registration number is from Bellville', () => {
        assert.equal(isFromBellville('CY 123'), true);
    });

    it('returns the boolean false if the registration number is not from Bellville', () => {
        assert.equal(isFromBellville('CJ 123'), false);
    })

});