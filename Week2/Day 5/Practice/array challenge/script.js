function alwaysHungry(arr) {
    var foodCount = 0;
    for(var i=0; i<arr.length; i++) {
        if(arr[i] == "food") {
            console.log("yummy");
            foodCount++;
        }
    }
    if(foodCount == 0) {
        console.log("I'm hungry")
    }
}
   
 alwaysHungry([3.14, "food", "pie", true, "food"]);

 alwaysHungry([4, 1, 5, 7, 2]);

// --------------------------------------------------------------------------
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=0; i<arr.length; i++) {
        if(arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

 var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
 console.log(result); 

// --------------------------------------------------------------------------

function betterThanAverage(arr) {
    var sum = 0;

    for(var i=0; i<arr.length; i++) {
        sum += arr[i];
    }

    var avg = sum / arr.length;
    var count = 0

    for(var i=0; i<arr.length; i++) {
        if(arr[i] > avg) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
 console.log(result);
// -------------------------------------------------------------------

 function reverse(arr) {
    var begin = 0;
    var end = arr.length - 1;
    while(begin < end) {
        var temp = arr[begin];
        arr[begin] = arr[end];
        arr[end] = temp;
        begin++;
        end--;
    }
    // your code here
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
 console.log(result);
// -----------------------------------------------------------------


function fibonacciArray(n) {
    var fibArr = [0, 1];
    while(fibArr.length < n) {
        var prev = fibArr[fibArr.length-1];
        var prevprev = fibArr[fibArr.length-2];
        fibArr.push(prev + prevprev);
        console.log(fibArr)
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); 


