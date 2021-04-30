var pokemon = require('../models/pokemon');
var poke1 = new pokemon.Pokemon("poke1", 15, 10);
var poke2 = new pokemon.Pokemon("poke2", 5, 20);
{
    test('verification of the life of the pokemon', function () {
        poke1.attacking(poke2);
        expect(poke2.health).toBe(5);
    });
}
