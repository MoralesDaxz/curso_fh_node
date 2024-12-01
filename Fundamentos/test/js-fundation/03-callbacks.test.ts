import { getUserById } from "../../src/js-foundation/03-callbacks"

describe("Test 03-callbacks", () => {
    test('should first', (done) => {
        const id = 10
        getUserById(id, (err, user) => {
            expect(err).toBe(`User not found with id ${id}`)
            expect(user).toBeUndefined();
            done()
        })
    })
    /* 04-Arrow */
    test("Jhon Doe with id 1", (done) => {
        getUserById(1, (err, user) => {
            expect(user?.name).toBe("John Doe")
            done()
        })
        getUserById(1, (err, user) => {
            expect(user).toEqual(
                {
                    id: 1,
                    name: "John Doe",
                }
            )
        })
    })


})