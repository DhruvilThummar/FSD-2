// Write a function name "firstlast" that takes an array and returns an  object with below condations.
// 1. The firt elemant of an array must be n objects keys 
// 2. the last element of anarray must be a keys value 

function firstlast(arr) {
    var fl = {};
    // fl[arr[0]] = data[-1];    // its giver undefined
    fl[arr[0]] = arr[arr.length - 1];
    return fl
}

var data = ['abc', 'def', 'ghi', 'jkl'];

console.log(firstlast(data));