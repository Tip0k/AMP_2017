/**
 * Created by PEOPLE on 20.02.2017.
 */

var N = 1963991;
// 701, 1709, 3571, 9001 - прості
//1963991 - мінімальний дільник 1319 (1319 - просте)

function isPrime(n) {
    if(isPrimeRec(n, 2)) {
        console.log("Число " + n + " просте ;)");
    }
    else {
        console.log("Число " + n + " не є простим (")
    }
}

function isPrimeRec(xn, xi) {
    //console.log(xi);
    if(xn === xi) return true;
    if(xn % xi === 0) return false;
    else if(isPrimeRec(xn, xi + 1)) return true;
    else return false;
}

isPrime(N);
