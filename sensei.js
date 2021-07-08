const Ninja = require('./ninja');


class Sensei extends Ninja{
    constructor(name){
        super(name, 10, 10, 190);
        this.speed = 10
        this.strength =10
        this.health = 190
        this.wisdom = 10
    }
    speakWisdom() {
        const sensei = super.drinkSake();
        console.log(sensei)
        console.log('One must break many codes in the process to becoming a good developer.')
    }
    sayName() {
        console.log(`Hello class, my name is ${this.name}`);
    }
    showStats() {
        console.log(`Speed: ${this.speed}, Strength: ${this.strength}, Health: ${this.health}, Wisdom: ${this.wisdom}`);
    }
}

let sensei1 = new Sensei('Koro Sensei')
    sensei1.sayName();
    sensei1.showStats();
    sensei1.speakWisdom();
