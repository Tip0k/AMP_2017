/**
 * Created by PEOPLE on 13.02.2017.
 */

for(var i = 101; i < 999; i++) {
    if(Math.floor((i % 100) / 10) != (i % 10)) console.log(i);
}
