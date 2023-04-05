describe('totalPhoneBill', () => {
    it('is a function', () => {
        assert.equal(typeof totalPhoneBill, 'function');
    })

    it('considers case sensitive', () => {
        assert.equal(totalPhoneBill('CALL, SMS'), 'R3.40');
    })

    it('returns the string "R7.45"', () => {
        const smsAndCall = totalPhoneBill('call, sms, call, sms, sms');
        assert.equal(smsAndCall, 'R7.45');
    })

    it('returns the string "R3.40"', () => {
        assert.equal(totalPhoneBill('sms, call'), 'R3.40');
    })

    it('returns the string "R15.70"', () => {
        assert.equal(totalPhoneBill('call, sms, call, sms, call, sms, call, call'), 'R15.70')
    })

})