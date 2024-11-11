import { emailTemplate } from "../src/js-foundation/01-template";


describe("Template", () => {
    test("Existe la palabra 'Hi, ' en documento?", () => {
        // Arrange
        expect(emailTemplate).toContain("Hi, ")
    })
})