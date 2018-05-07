const map = (array = [], func = (item) => item) => {
    if(!Array.isArray(array)){
        throw new TypeError('The first parameter must be an array')
    }
    let newArray = [];
    for (let i = 0; i < array.length; i++)
        newArray.push(func(array[i], i, array))

    return newArray
};


export default map;