describe('countAllFromTown', () => {
    it('is a function', () => {
        assert.equal(typeof countAllFromTown, 'function');
    });

    it('returns the number 3 if there are 3 registraions from Stellies', () => {
        const fromStellies = countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL');
        assert.equal(fromStellies, 3);
    });

    it('returns the number 4 if there are 4 registrations from Cape Town', () => {
        const fromCPT = countAllFromTown('CA 123, CA 453, CA 542, CA 134,CF 12134, CJ 543', 'CA');
        assert.equal(fromCPT, 4);
    });

    it('returns the number 1 if there is 1 registrations from Kuilsriver', () => {
        const fromKuilsriver = countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF');
        assert.equal(fromKuilsriver, 1);
    });

})