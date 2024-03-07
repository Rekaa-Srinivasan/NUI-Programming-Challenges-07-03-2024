function groupingMultiples(inputArray){
    if(!Array.isArray(inputArray)){
        return "Provide a valid array to find the multiples";
    }
    const groupedArray = [];
    for(let counter = 1; counter <= 10; counter++){
        const divisor = counter;
        const divisibles = [];
        for(const element of inputArray){
            if(typeof element == "number"){
                if(element % counter == 0){
                    divisibles.push(element);
                }
            }
        }
        let multiples = {};
        multiples[divisor] = divisibles;
        groupedArray.push(multiples);
    }
    return groupedArray;
}

console.log(groupingMultiples(['34', '  ', -10, 15, 7, 21, 81]));