describe('transportFee', () => {
    it('is a function', () => {
        assert.equal(typeof transportFee, 'function');
    });

    it('considers case sensitive for the string morning', () => {
        assert.equal(transportFee('MORNING'), 'R20');
    })

    it('considers case sensitive for the string afternoon', () => {
        assert.equal(transportFee('AFTERNOON'), 'R10');
    })

    it('returns a string "R20" for the morning', () => {
        assert.equal(transportFee('morning'), 'R20');
    });

    it('returns a string "R10" for the afternoon', () => {
        assert.equal(transportFee('afternoon'), 'R10');
    });

    it('returns a string "free" if it is the evening', () => {
        assert.equal(transportFee('evening'), 'free');
    });

})