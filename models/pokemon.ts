
export class Pokemon {
    name:string;
    attack:number;
    health:number;
    constructor(name: string, attack: number, health: number) {
        this.name = name;
        this.attack = attack;

        this.health =health;
    }
    getAttack(){
        return this.attack;
    }
    getHealth(){
        return this.health;
    }
    setHealth(health:number){
        this.health = health;
    }

    attacking (poke: Pokemon){
        poke.setHealth(poke.getHealth() - this.getAttack());
        if (poke.getHealth() === 0) {
            poke.setHealth(0);
        };
    }
}
