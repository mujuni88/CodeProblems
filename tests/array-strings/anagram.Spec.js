"use strict";

import anagram from '../../src/array-strings/anagram'

describe('Anagram', () => {
    it('should report false', () => {
        expect(anagram('abc','adb')).to.equal(false);
        expect(anagram('a','adb')).to.equal(false);
    });
    it('should report true', () => {
        expect(anagram('abc','cab')).to.equal(true);
        expect(anagram('evil','vile')).to.equal(true);
        expect(anagram('glean','angel')).to.equal(true);
        expect(anagram('a','a')).to.equal(true);
    });
    it('should throw error', () => {
        expect(anagram.bind(null,'abc',1)).to.throw('invalid');
        expect(anagram.bind(null,1,1)).to.throw('invalid');
    });
});