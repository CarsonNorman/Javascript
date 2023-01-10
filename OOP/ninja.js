class Ninja{
    constructor(name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName(){
        console.log(`My name is ${this.name}`)
    }
    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`)
    }
    drinkSake(){
        this.health += 10
    }
}

const satoru = new Ninja('Satoru', 15, 6);
satoru.sayName()
satoru.showStats()

class Sensei extends Ninja{
    constructor(name, health=200, speed=10, strength=10, wisdom=10){
        super(name, health, speed, strength)
        this.wisdom = wisdom
    }
    speakWisdom(){
        this.drinkSake()
        console.log('Never do today what can be done tomorrow else your PM will expect too much')
    }
}

const tatsunari = new Sensei('Tatsunari');
tatsunari.sayName()
tatsunari.showStats()
tatsunari.speakWisdom()
tatsunari.showStats()