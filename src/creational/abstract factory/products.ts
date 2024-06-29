interface Monster {
    position:string
    power:number
    health:number
    sound():void
    attack():void
    damage():void
}


interface GroundMonster extends Monster {
    walk():void
}

interface FLyingMonster extends Monster {
    fly():void
}


class Zombie implements GroundMonster{

    constructor(
        public position:string,
        public power:number,
        public health:number
        ){}

    sound(){
        console.log(`zombie sound........... in  ${this.position}`)
    }
    attack(){
        console.log(`zombie is attacking. power: ${this.power}`)
    }
    walk(): void {
        console.log(`zombie is walking`);
    }
    damage(){
        if (this.health<= 0)
            console.log("zombie is dead")
        else{
            this.health-=1
            console.log(`zombie is damaged. health: ${this.health}`)
        }
    }
}





class Zoglin implements GroundMonster{

    constructor(
        public position:string,
        public power:number,
        public health:number
        ){}

    sound(){
        console.log(`zoglin sound........... in  ${this.position}`)
    }
    attack(){
        console.log(`zoglin is attacking. power: ${this.power}`)
    }
    walk(): void {
        console.log(`zoglin is walking`);
        
    }
    damage(){
        if (this.health<= 0)
            console.log("zoglin is dead")
        else{
            this.health-=1
            console.log(`zoglin is damaged. health: ${this.health}`)
        }
    }
}



class Phantom implements FLyingMonster{

    constructor(
        public position:string,
        public power:number,
        public health:number
        ){}

    sound(){
        console.log(`phantom sound........... in  ${this.position}`)
    }
    attack(){
        console.log(`phantom is attacking. power: ${this.power}`)
    }
    fly(): void {
        console.log(`phantom is flying`);
    }
    damage(){
        if (this.health<= 0)
            console.log("phantom is dead")
        else{
            this.health-=1
            console.log(`phantom is damaged. health: ${this.health}`)
        }
    }
}

class Ghast implements FLyingMonster{

    constructor(
        public position:string,
        public power:number,
        public health:number
        ){}

    sound(){
        console.log(`ghast sound........... in  ${this.position}`)
    }
    attack(){
        console.log(`ghast is attacking. power: ${this.power}`)
    }
    fly(): void {
        console.log(`ghast is flying`)
    }
    damage(){
        if (this.health<= 0)
            console.log("ghast is dead")
        else{
            this.health-=1
            console.log(`ghast is damaged. health: ${this.health}`)
        }
        
    }
}


export {GroundMonster, FLyingMonster, Zombie, Phantom, Zoglin, Ghast}