'use strict' // sorry slipped my mind again 

var arr = [1,2,3,4,5,6,7,8,9];
var num = 3;
var counter = 0;
function greaterThan(arr, num){
    for (var i=0; i <= arr.length -1; i++){
        if (arr[i] > num){
            counter++;
        }
    }
}
console.log(counter);