'use strict' //soory it slipped my mind :')

// guess who? hahaha
var inputArray = ['master of conflict', 'mr.boss man', 'Death note holder', 'sheyab', 'arthur shelby', 'queen of zeros'];
var allCapsArray = [];

function allcaps(inputArray){
    for (var i=0; i <= inputArray.lenght-1; i++){
        var capitalL = touppercase(inputArray[i])
        allCapsArray.push(capitalL);
    }
}