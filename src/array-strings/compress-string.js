"use strict";

export default function compress(str) {
    if (!str || typeof str !== 'string') {
        throw new Error('Invalid param');
    }
    if (str.length < 2) {
        return str;
    }
    let currChar = str[0],
        c = 1,
        ch, out = '';
    for (let i = 1; i < str.length; i++) {
        ch = str[i];
        if (ch === currChar) {
            ++c;
        } else {
            out = getAppendedStr(out, currChar, c);
            currChar = ch;
            c = 1;
        }
        out = (i === str.length - 1) ? getAppendedStr(out, currChar, c) : out;
    }
    return (out.length < str.length) ? out : str;
}

function getAppendedStr(out, currChar, c) {
    out += currChar;
    out += (c > 1) ? c : '';
    return out;
}