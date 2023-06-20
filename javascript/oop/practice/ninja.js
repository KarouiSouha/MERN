class Ninja{
    constructor(name){
        this.name=name;
        this.health=100;
        this.speed=3;
        this.strength=3;
    }
    sayName() {
        console.log(`My name is ${this.name}`);
    }  
    showStats() {
        console.log(`My name is ${this.name} my strength is ${this.strength} my speed is ${this.speed} and my health ${this.health}`);
    }
    drinkSake(){
        this.health += 10;
        console.log(`${this.health} gained 10 health`)
    }
}
const ninja=new Ninja("Hyabusa");
ninja.sayName();
ninja.showStats();
ninja.drinkSake();