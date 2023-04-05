describe('yearsAgo', () => {
    it('is a function', () => {
        assert.equal(typeof yearsAgo, 'function')
    });

    it('check for the type of the output', () => {
        let returnedValue = yearsAgo(1976);
        assert.equal(typeof returnedValue, 'number');
    });

    // it('returns NaN when not passed in a number', () => {
    //     assert.equal(yearsAgo("197r"), NaN);
    // })

    it('returns a number for how many years ago from the current day', () => {
        assert.equal(yearsAgo(1976), 47);
    });

    it('returns a number for how many years ago from the current day', () => {
        assert.equal(yearsAgo(2000), 23);
    });
});