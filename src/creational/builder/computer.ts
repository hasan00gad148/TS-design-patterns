import {string_,number_,boolean_} from './custom_types'

export default class Computer{
    constructor(
        public cpu:string_,
        public gpu:string_,
        public motherBoard:string_,
        public powerSupply:string_,
        public ram:number_,
        public ssd:number_,
        public hdd:number_,
        public isWaterCooled: boolean_
    ){}
    specs ():void{
        console.log(`
                \n
                pc specs: \n
                cpu: ${this.cpu},
                gpu: ${this.gpu},
                motherBoard: ${this.motherBoard},
                powerSupply: ${this.powerSupply},
                ram: ${this.ram},
                ssd: ${this.ssd},
                hdd: ${this.hdd},
                isWaterCooled: ${this.isWaterCooled}
                \n
            `);
        
    }
}

