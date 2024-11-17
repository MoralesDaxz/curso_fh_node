import { characters } from "../../src/js-foundation/02-destructuring"

describe("Test 02-destructuring", () => {
    
    test('Existen heroes', () => { expect(characters).toContain("Flash") })
    test('Orden de heroes', ()=>{expect(characters[0]).toBe("Flash")})
})