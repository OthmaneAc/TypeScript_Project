var battle = require('../models/battle');
var pokemonn = require('../models/pokemon');
var poke3 = new pokemonn.Pokemon("poke1", 15, 10);
var poke4 = new pokemonn.Pokemon("poke2", 5, 20);
var fighting = new battle.Battle(poke3, poke4);
test('le vainqueur est poke3', function () {
    fighting.fight();
    expect(fighting.isWinner().toBe(poke3));
});
