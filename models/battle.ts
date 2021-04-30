import {Pokemon} from "./pokemon";


export class Battle {
    pokemon1: Pokemon;
    pokemon2:Pokemon;
    turn: number;

    constructor(pokemon1: Pokemon, pokemon2: Pokemon) {
        this.pokemon1 = pokemon1;
        this.pokemon2 = pokemon2;
        this.turn = 0;
    }

    fight(): Pokemon{
        while(this.isDead() === false){
            this.Turn();
        }

            return this.isWinner();


    }


    isTurn(): Pokemon{
        this.turn += 1;
        if (this.turn % 2 === 0) {
            return this.pokemon2;
        }
        else {
            return this.pokemon1;
        }

    }

    Turn(){
        const turnOf = this.isTurn();
        if (turnOf == this.pokemon1){
            this.pokemon1.attacking(this.pokemon2);
        }
        else {
            this.pokemon2.attacking(this.pokemon1)
        }
    }

    isWinner(): Pokemon  {
        if (this.pokemon1.health <= 0 ) {
            return this.pokemon2;
        }
        else{
            return this.pokemon1;
        }

    }

    isDead(): boolean {
        if ((this.pokemon1.health <= 0) || (this.pokemon2.health <= 0 )){
            return true;
        }
        else{
            return false;
        }
    }

}