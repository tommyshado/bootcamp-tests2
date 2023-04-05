describe('regCheck', () => {
    it('is a function', () => {
        assert.equal(typeof regCheck, 'function');
    });

    it('returns the boolean value true if the registration is from the same town', () => {
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });

    it('returns the boolean value false if the registration number is not from the given town name', () => {
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });

    it('returns the boolean value true if the registation value is from the same town', () => {
        assert.equal(regCheck('5566 L', 'L'), true);
    })
});