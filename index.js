// Add your functions here
function map(sourceArray, callbackFunction){
    let newArray = [];
    for (const elem of sourceArray) {
        newArray.push(callbackFunction(elem));
    }
    return newArray;
}

function reduce(sourceArray, reducer, init){
    let accum;
    let workingSourceArray = [...sourceArray];
    if (!!init === false){
        accum = workingSourceArray.shift();
    } else {
        accum = init;
    }
    for (const elem of workingSourceArray){
        accum = reducer(accum, elem);
    }
    return accum;
}
