'use strict';

var pals = [{
    expected: true,
    val: 'aba'
}, {
    expected: true,
    val: 'abcdcba'
}, {
    expected: false,
    val: 'a'
}, {
    expected: false,
    val: 'ab'
}, {
    expected: true,
    val: 'bb'
}, {
    expected: false,
    val: ''
}];

testPalindrome(pals);

function testPalindrome(ts) {
    ts.forEach(function (pal) {
        var isPal = isPalindrome(pal.val);
        console.log('is ' + pal.val + ' palindrome? \n returned ' + isPal + ': expected ' + pal.expected + '\n');
    });
}

function isPalindrome(x) {

    if (x.length < 2) {
        return false;
    }

    var length = x.length,
        start = 0,
        end = length - 1;

    while (start < end) {
        if (x.charAt(start) !== x.charAt(end - start)) {
            return false;
        }
        start++;
    }

    return true;
}

//# sourceMappingURL=palindrome-compiled.js.map