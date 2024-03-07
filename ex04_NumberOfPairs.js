function findNumberOfPairs(inputArray, sum){
    if(!Array.isArray(inputArray)){
        return "Provide a valid array to find the matching pair";
    }else if(typeof sum != 'number'){
        return "Provide a valid sum value to compare";
    }
    let numberOfPairs = 0;
    // const pairs = [];
    for(let index1 = 0; index1 < inputArray.length; index1++){
        for(let index2 = index1+1; index2 < inputArray.length; index2++){
            if(inputArray[index1]+inputArray[index2] == sum){
                numberOfPairs++;
                // pairs.push(inputArray[index1], inputArray[index2]);
            }
        }
    }
    // console.log(pairs);
    return numberOfPairs;
}
console.log(findNumberOfPairs([4, 3, 7, 5, 2, 6, 8, 1], 8));