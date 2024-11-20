import { getPokemonById } from "../../src/js-foundation/06-promises";

test("Get pokeon by id should return a pokemon", async () => {
    const pokemonId = 1
    const pokemonName = await getPokemonById(pokemonId)
    expect(pokemonName).toBe("bulbasaur")
})

test("Should return an error if pokemon does not exist", async () => {
    const pokemonId = 100000000
    try {
        await getPokemonById(pokemonId)
        expect(true).toBeFalsy()/* Forzamos para que siempre sea false esta prueba y pase al catch */

    } catch (error) {
        expect(error).toBe(`pokemon not found with id ${pokemonId}`)
    }
})