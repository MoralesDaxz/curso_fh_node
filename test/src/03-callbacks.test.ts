import { getUserById } from "../../src/js-foundation/03-callbacks"

describe("Test 03-callbacks",()=>{
    
    test('No exito, return error', (done) => { 
        const id = 10
       
        getUserById(id, (err, user)=>{
            expect(err).toBe(`User not found with id ${id}`);
            expect(user).toBeUndefined();
           done()
        })
     })
})