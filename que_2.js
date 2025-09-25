// Given an array of integers, write a function to move all zeroes to the end while 
// maintaining the relative order of the other elements. 
// The implementation should not use any additional array.


function moveZeroesToEnd(arr) {
    let nonZeroIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[nonZeroIndex] = arr[i];
            nonZeroIndex++;
        }
    }  
    for (let i = nonZeroIndex; i < arr.length; i++) {
        arr[i] = 0;
    }
    return arr;
}


moveZeroesToEnd([0, 1, 0, 3, 12]); // Output: [1, 3, 12, 0, 0]