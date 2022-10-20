const validateValue = require("./validateValue")

test('Валид значения', () => {
    expect(validateValue(50)).toBe(true)
})


describe('validateValue', () => {
    test('Корректное значение', () => {
        expect(validateValue(50)).toBe(true)
    })

    test('Больше корректного', () => {
        expect(validateValue(-1)).toBe(false)
    })

    test('Меньше корректного', () => {
        expect(validateValue(101)).toBe(false)
    })

    test('Пограничные значение сверху', () => {
        expect(validateValue(0)).toBe(true)
    })

    test('Пограничные значение снизу', () => {
        expect(validateValue(100)).toBe(true)
    })
})