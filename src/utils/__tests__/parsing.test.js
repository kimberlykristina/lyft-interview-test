const {getEvery} = require('../parsing')

describe('getEvery', () => {
    test('Should return a string with every third letter', () => {
        const result = getEvery(3)('iamyourlyftdriver')
        const expected = 'muydv'
        expect(result).toBe(expected)
    })

    test('Should return a string with every fourth letter', () => {
        const result = getEvery(4)('ibyfuhgojunokjhd')
        const expected = 'food'
        expect(result).toBe(expected)
    })
    
    test('Should return an empty string when given zero as the number arg', () => {
        const result = getEvery(0)('iamyourlyftdriver')
        const expected = ''
        expect(result).toBe(expected)
    })

    test('Should throw an error when given a number less than 0', () => {
        expect(() => getEvery(-5).toThrow())
    })

    test('Should throw an error when given the incorrect types as args', () => {
        expect(() => getEvery('word')(9).toThrow())
    })

})