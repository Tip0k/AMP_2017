/**
 * Created by PEOPLE on 13.02.2017.
 */

var a = [5, 1, 6];
var flag;

console.log("Нехай є три числа: ", a[0], a[1], a[2]);

if(a[0] === a[1] + a[2]) {
    flag = a[0];
} else if(a[1] === a[2] + a[0]) {
    flag = a[1];
} else if(a[2] === a[1] + a[0]) {
    flag = a[2];
} else {
    flag = -1;
}

if(flag != -1) {
    console.log("Число " + flag + " дорівнює сумі двох інших");
} else {
    console.log("Жодне число не дорівнює сумі двох інших");
}
