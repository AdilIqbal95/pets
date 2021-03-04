class PetDetails{
    constructor(name, happinessLevel, hungerLevel) {
    this.name = name;
    this.happiness = happinessLevel;
    this.hunger = hungerLevel;
    this.changeName = newName(); } 

    changeName(updateName) {
        let name = updateName ;
    } ;

    checkLevels() {
        console.log(`Your pet's happiness levels: ${this.happiness}`)
        console.log(`Your pet's hunger levels: ${this.hunger}`)
    } ;

}

const firstObject = new PetDetails("john", 10, 10) ; 

firstObject.changeName("Bob"); 

console.log(john.happinessLevel)