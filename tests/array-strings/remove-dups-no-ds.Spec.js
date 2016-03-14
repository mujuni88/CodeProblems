"use strict";
import removeDups from '../../src/array-strings/remove-dups-no-ds'

xdescribe('RemoveDupsNoDs', function(){
    it('should not remove dups', function(){
        expect(removeDups('a')).to.equal('a');
        expect(removeDups('abcdefgh')).to.equal('abcdefgh');
    });
    it('should remove dups', function(){
        expect(removeDups('aabc')).to.equal('abc');
        expect(removeDups('abbcdefffgzz')).to.equal('abcdefgz');
    });
    it('should throw error', function(){
        expect(removeDups.bind(null,'')).to.throw('Invalid input');
        expect(removeDups.bind(null,'@4ABAAAC1223')).to.throw('Invalid input');
        expect(removeDups.bind(null,'1234')).to.throw('Invalid input');
    });
});