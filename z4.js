/**
 * Created by PEOPLE on 20.02.2017.
 */

var countSpaces = 10;
var S = "Цей рядок буде циклічно зсунутий вправо на " + countSpaces + " символів.";
var i;

console.log(S);

for (i = 0; i < countSpaces; i++) {
    var tmp = S;
    S = " " + tmp;
}

console.log(S);