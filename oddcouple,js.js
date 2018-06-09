function oddCouple(array){
    newArray = [];
    for (let i = 0; i < array.length; i++){
        if (array[i]%2 === 0){
            continue;
        }
        else {
            newArray.push(array[i]);
        }
        if (newArray.length <= 2){
            return newArray;
            console.log(newArray);
        }
    }
}

console.log(oddCouple([2, 4, 6, 8])); 