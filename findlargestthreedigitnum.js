function findLargestThreeDigitNum(digits) {
    var digitsArr = [];
    var maxSum = 0;
    var result = 0;
      for (var i = 0; i < digits.length; i++) {
        digitsArr.push(Number(digits[i]))
      }
      // console.log('digitsArr=  ')
      console.log(digitsArr)
      for (var j = 0; j < digitsArr.length-2; j++) {
        if (sumThree(digits[j], digits[j+1], digits[j+2]) > maxSum) {
          // console.log('maxSum=  ' + maxSum)
            maxSum = sumThree(digits[j], digits[j+1], digits[j+2])
          // console.log('result=  ' + result)
            result = digits[j]+digits[j+1]+digits[j+2];
        }
      }
      // console.log(result)
      return result;
      
      function sumThree(a,b,c) {
          return a+b+c
      }
      
  }  

  console.log(findLargestThreeDigitNum('231998132'));