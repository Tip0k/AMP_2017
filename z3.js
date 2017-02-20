/**
 * Created by PEOPLE on 19.02.2017.
 */

var A = new Array(19);
var i, j;

for (i = 0; i < A.length; i++) {
    A[i] = (Math.random() * 100).toFixed(0);
}

function numSortDec(a, b) {
    return b - a;
}

A.sort(numSortDec);

for (i = 0; i < A.length; i++)
    console.log(A[i]);