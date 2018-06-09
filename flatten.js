function check_divisors(array, low, high){
  let result = [];
  for(var i = low; i <= high; i++){
    for(var j = 0; j < array.length; j++){
      if( i % array[j] === 0){
       result.push(array[j]); 
      }
    } 
      if(result.length ===1){
        console.log(i, "one_match")
      }
      if(result.length === array.length){
      console.log(i, "all_match")
      }
      if(!result.length){
      console.log(i)
      }
     
    }
return result;
console.log(result);    
}

console.log(check_divisors([2,3], 1 ,7));