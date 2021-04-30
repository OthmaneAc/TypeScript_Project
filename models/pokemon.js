"use strict";
exports.__esModule = true;
exports.Pokemon = void 0;
var Pokemon = /** @class */ (function () {
    function Pokemon(name, attack, health) {
        this.name = name;
        this.attack = attack;
        this.health = health;
    }
    Pokemon.prototype.getAttack = function () {
        return this.attack;
    };
    Pokemon.prototype.getHealth = function () {
        return this.health;
    };
    Pokemon.prototype.setHealth = function (health) {
        this.health = health;
    };
    Pokemon.prototype.attacking = function (poke) {
        poke.setHealth(poke.getHealth() - this.getAttack());
        if (poke.getHealth() === 0) {
            poke.setHealth(0);
        }
        ;
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
