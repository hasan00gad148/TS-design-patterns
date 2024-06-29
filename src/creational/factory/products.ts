export default interface Monster {
    position:string
    power:number
    health:number
    sound():void
    attack():void
    damage():void
}

class Zombie implements Monster{

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
    damage(){
        if (this.health<= 0)
            console.log("zombie is dead")
        else{
            this.health-=1
            console.log(`zombie is damaged. health: ${this.health}`)
        }
    }
}


class Skeleton implements Monster{

    constructor(
        public position:string,
        public power:number,
        public health:number
        ){}

    sound(){
        console.log(`skeleton sound........... in  ${this.position}`)
    }
    attack(){
        console.log(`skeleton is attacking. power: ${this.power}`)
    }
    damage(){
        if (this.health<= 0)
            console.log("skeleton is dead")
        else{
            this.health-=1
            console.log(`skeleton is damaged. health: ${this.health}`)
        }
    }
}



class Zoglin implements Monster{

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
    damage(){
        if (this.health<= 0)
            console.log("zoglin is dead")
        else{
            this.health-=1
            console.log(`zoglin is damaged. health: ${this.health}`)
        }
    }
}


class Ghast implements Monster{

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
    damage(){
        if (this.health<= 0)
            console.log("ghast is dead")
        else{
            this.health-=1
            console.log(`ghast is damaged. health: ${this.health}`)
        }
        
    }
}


export { Zombie, Skeleton, Zoglin, Ghast}