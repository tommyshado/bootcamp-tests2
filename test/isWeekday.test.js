describe('isWeekday', () => {
    it('is a function', () => {
        assert.equal(typeof isWeekday, 'function');
    })

    it('returns the boolean value false if the day is on the weekend', () => {
        assert.equal(isWeekday('Saturday'), false);
    });

    it('returns the boolean value false if the day is on the weekend', () => {
        assert.equal(isWeekday('Sunday'), false);
    });

    it('returns the boolean value true if the day is during the week', () => {
        assert.equal(isWeekday('Monday'), true);
    });

    it('returns the boolean value true if the day is during the week', () => {
        assert.equal(isWeekday('Thursday'), true);
    })

})