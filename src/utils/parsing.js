/**
 * Function returns a string of every nth letter of the text provided as a parameter 
 * @param {number} nthLetter - the number ...
 * @returns {function getEvery_inner({string} text)}
 */
const getEvery = (nthLetter) => {
    if(typeof(nthLetter) !== 'number'){
        throw new TypeError(`The argument provided is of the incorrect type. Expected type: number, received : ${typeof(nthLetter)}`)
    }
    if(nthLetter < 0){
        throw new Error(`Values less that 0 are not supported. Received: ${nthLetter}`)
    }
    return (text) => {
        if(typeof(text) !== 'string'){
            throw new TypeError(`The argument provided is of the incorrect type. Expected type: string, received: ${typeof(text)}`)
        }
        const textArray = text.split("")
        let output = textArray.filter((_, index) => (index + 1) % nthLetter === 0)
        return output.join("")
    }
}

module.exports = {getEvery}