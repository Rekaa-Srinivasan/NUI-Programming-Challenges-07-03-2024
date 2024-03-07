function changePosition(inputArray, position){
    if(!Array.isArray(inputArray)){
        return "Provide a valid array to change the position of elements";
    }else if(typeof position != 'number'){
        return "Provide a valid position element";
    }
    for(let i = 0; i < position; i++){
        const poppedElement = inputArray.pop();
        inputArray.unshift(poppedElement);
    }
    return inputArray;
}

console.log(changePosition([3, 45, 42, 11, 34], '13'));