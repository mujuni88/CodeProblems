"use strict";

import compress from '../../src/array-strings/compress-string'

describe('compress', function() {
    it('should throw error', function() {
        expect(compress.bind(null, '')).to.throw('Invalid param');
        expect(compress.bind(null, null)).to.throw('Invalid param');
        expect(compress.bind(null, 122)).to.throw('Invalid param');
    });
    it('should compress values', function() {
        expect(compress('a')).to.equal('a');
        expect(compress('aabb')).to.equal('aabb');
        expect(compress('aaabbbaabb')).to.equal('a3b3a2b2');
    });
});