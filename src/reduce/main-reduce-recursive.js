
const isInitialvalueUndefined = (initialValue) => initialValue === undefined
const mainReduceRecursive = (arr, func, initialValue) => {
   
    const acc =  isInitialvalueUndefined(initialValue) ? arr[0] : initialValue
    const arrCopy =  isInitialvalueUndefined(initialValue) ? arr.slice(1) : arr
   
    return (function mainReduceRecursiveInternal(accInternal, arrInternal, counter) {
        const [head, ...tail] = arrInternal
        const accNext = () => func(accInternal, head, counter, arrCopy)
        return arrInternal.length === 0
        ? accInternal
        : mainReduceRecursiveInternal(accNext(), tail, counter + 1)
    })(acc, arrCopy, 0)

}

export default mainReduceRecursive