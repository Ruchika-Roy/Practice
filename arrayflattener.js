function arrayFlattener(array){
    return array.reduce(function(acc, next){
        if (Array.isArray(next)){
            return arrayFlattener(acc.concat(next));
        }
        else {
            return acc.concat(next);
        }
    }
    , []);
}

console.log(arrayFlattener([1,[2, 3], 4, [5, 6]]));

