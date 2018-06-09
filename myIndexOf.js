// function myIndexOf(source, searchValue, startIdx){
//     var result;
//     if (startIdx === undefined){
//         startIdx = 0;
//     }
//     for(let i = startIdx; i<source.length; i++){
//         if (source.search(searchValue) !== undefined){
//             result = source.search(searchValue);
//             return result;
//         }
//         else {
//             result = '-1';
//             return result;
//         }
//     }
//     console.log(result);
// }

// console.log(myIndexOf('pooper scooper', 'scoop'));

function myIndexOf(string, searchTerm){
    var result;
    for (i=0; i<string.length; i++){
        if (string.search(searchTerm) !== undefined){
            result = string.search(searchTerm);
        }
        else {
            result = -1
        }
    }
    return result;
    console.log(result);
}

console.log(myIndexOf('balloons are fun', 'all'));