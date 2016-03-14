'use strict';

import HashMap from '../../src/array-strings/hashmap'

xdescribe('HashMap', function(){
    let hm = new HashMap();
    hm.put('a','abc');
    hm.put('abc', 'abcde');

    it('should put key: a, val : abc', function(){
        expect(hm.get('a')).to.equal('abc');
        expect(hm.get('abc')).to.equal('abcde');
    });
    it('should throw an error', function(){

        expect(hm.put.bind(null, 1)).to.throw('Key of string type required');
    });
    it('should report undefined for key az', function(){
        expect(hm.get('az')).to.be.an('undefined');
    });
});