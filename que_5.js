

// Write a function that takes two sorted arrays of integers as input and returns a new sorted array containing
//  all the unique elements from both input arrays, maintaining their sorted order.Example:

function mergeUniqueSortedArrays(arr1, arr2) {
    
    let i = 0
    let j = 0
    const ans = []
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
          ans.push(arr1[i])
          i++
        }else if(arr1[i] > arr2[j]){
          ans.push(arr2[j])
          j++
        }else if(arr1[i] === arr2[j]){
          ans.push(arr1[i])
          i++
          j++
        }
        
    }
    while(i < arr1.length){
        ans.push(arr1[i])
          i++
    }
    while(j < arr2.length){
        ans.push(arr2[j])
          j++
    }
    console.log('ans',ans)
    
}


mergeUniqueSortedArrays([1, 2, 3, 4, 5], [2, 4, 6, 8]); 


// Output - [1, 2, 3, 4, 5, 6, 8]