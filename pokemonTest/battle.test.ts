const battle = require('../models/battle')
const pokemonn = require('../models/pokemon')

let poke3 = new pokemonn.Pokemon("poke1",15,10);
let poke4 = new pokemonn.Pokemon("poke2",5,20);

let fighting = new battle.Battle(poke3, poke4);

test('le vainqueur est poke3', () => {
    fighting.fight();
    expect(fighting.isWinner().toBe(poke3))
})