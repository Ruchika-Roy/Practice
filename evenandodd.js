function evenAndOdd(array){
    let evens = [];
    let odds = [];
    let finalArray = []
    for (let i = 0; i < array.length; i++){
        if (array[i]%2 === 0){
            evens.push(array[i]);
        }
        else {
            odds.push(array[i]);
        }
    }
    finalArray[0] = evens;
    finalArray[1] = odds;
    return finalArray;
    console.log(finalArray);
}

console.log(evenAndOdd([1, 2, 3, 4, 5, 6]));