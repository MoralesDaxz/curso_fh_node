import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe("05-factory", () => {
    /* Evaluamos sobre las funciones declaradas dentro del describe no sobre las exportadas. */
    const getUUID = () => "1234"
    const getAge = () => 40
    test("buildMakePerson return a person", () => {
        const person = buildMakePerson({ getUUID, getAge });
        expect(typeof person).toBe("function")
    })

    test("makePerson should return a person", () => {
        const makePerson = buildMakePerson({ getUUID, getAge })
        const person = makePerson({ name: "John", birthdate: "1985-10-21" })
        expect(person).toEqual({
            name: "John", birthdate: "1985-10-21", id: "1234", age: 40
        })
    })
})