const reduce = (arr, func, initialValue) => {
    let acc = initialValue || 0;
    for(let i = 0; i < arr.length; i++) {
        acc = func(acc, arr[i])
    }

    return acc;
}

export default reduce