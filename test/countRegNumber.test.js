describe('countRegNumber', () => {
    it('is a function', () => {
        assert.equal(typeof countRegNumber, 'function');
    });

    it('returns the number 1 if there is 1 registrations number within the given string', () => {
        let returnedValue = countRegNumber('CA 182736');
        assert.equal(returnedValue, 1);
    });

    it('returns the number 3 if there are 3 registrations number within the given string', () => {
        let returnedValue = countRegNumber('CA 182736,CY 523519,CJ 812328');
        assert.equal(returnedValue, 3);
    });
    // it('returns the number 0 if the is an empty string', () => {
    //     assert.equal(countRegNumber(), 0);
    // })
});