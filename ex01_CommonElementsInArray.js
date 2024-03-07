function findCommonNumbers(array1, array2) {
    if(!Array.isArray(array1) || !Array.isArray(array2)){
        return "Provide a valid array to find the common elements between them";
    }
    const commonNumbers = [];
    for(const element of array1){
        if(typeof element == "number"){
            if(array2.includes(element)){
                commonNumbers.push(element);
            }
        }
    }
    return commonNumbers;
}
console.log(findCommonNumbers([3, '45', 42, 11, 34], [35, -7, undefined, 11, 1, 45]));
