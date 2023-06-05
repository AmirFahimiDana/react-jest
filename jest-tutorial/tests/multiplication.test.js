import { multiplication } from "../math"

it("return 6 when multiply 3 by 2", () => {
    expect(multiplication(3, 2)).toEqual(6)
})

it("multiply 3 by 2 is not 10", () => {
    expect(multiplication(3, 2)).not.toEqual(10)
})

it("multiply 3 by 2 is greater than 5", () => {
    expect(multiplication(3, 2)).toBeGreaterThan(5)
})

it("multiply 3 by 2 is less than 7", () => {
    expect(multiplication(3, 2)).toBeLessThan(7)
})