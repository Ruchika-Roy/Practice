function mySlice(originalString, startIdx, endIdx){
    if (startIdx !== 0, endIdx !==0) {
        let newString = originalString.substring(startIdx, endIdx);
        return newString;
        console.log(newString);
    }
    else {
        return originalString;
        console.log(originalString);
    }
}

console.log(mySlice('Hello World!', 2, 7));