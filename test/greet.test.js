describe('greet', () => {
    it ('is a function', () => {
        assert.equal(typeof greet, 'function')
    });

    it ('returns a string that greets the user', () => {
        assert.equal(greet('Nick'), 'Hello, Nick');
    });

    it ('returns a string that greets the user', () => {
        assert.equal(greet('Malebo'), 'Hello, Malebo');
    });

});