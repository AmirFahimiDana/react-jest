import { describe, expect, test } from '@jest/globals';
import { sum } from "../math"

describe('Sum module', () => {
    test('add 4 + 2 to equal 6', () => {
        it("return 6 when 4 plus to 2", () => {
            expect(sum(4, 2)).toBe(6)
        })

        it("4 plus 2 is not 7", () => {
            expect(sum(4, 2)).not.toBe(7)
        })
    })
})

