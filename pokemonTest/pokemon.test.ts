
const pokemon = require('../models/pokemon')




let poke1 = new pokemon.Pokemon("poke1",15,10)
let poke2 = new pokemon.Pokemon("poke2",5,20)

test('verification of the life of the pokemon', () => {
    poke1.attacking(poke2);
    expect (poke2.health).toBe(5);
})



