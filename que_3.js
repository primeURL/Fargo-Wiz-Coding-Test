// Write a function that counts the number of properties in an object (including nested objects).
// Example:
// countProperties({ a: 1, b: { c: 2, d: 3 }, e: 4 }); // 5


function countProperties(obj){
    let count = 0
    function helper(obj){
      
       for(const value in obj){
         if(typeof(obj[value]) === 'object'){
           helper(obj[value])
         }
         count++
       }
    }
    
    helper(obj)
    
    console.log('count',count)
   
}

countProperties({ a: 1, b: { c: 2, d: 3 }, e: 4 });