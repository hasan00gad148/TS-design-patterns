import {string_,number_,boolean_} from './custom_types'
import Computer from './computer'


export default class ComputerBuilder{
    private cpu:string_
    private gpu:string_
    private motherBoard:string_
    private powerSupply:string_
    private ram:number_
    private ssd:number_
    private hdd:number_
    private isWaterCooled:boolean_

    setCpu(cpu:string_):ComputerBuilder{
        this.cpu = cpu
        return this
    }

    setGpu(gpu:string_):ComputerBuilder{
        this.gpu = gpu
        return this
    }

    setMotherBoard(motherBoard:string_):ComputerBuilder{
        this.motherBoard = motherBoard
        return this
    }

    setPowerSupply(powerSupply:string_):ComputerBuilder{
        this.powerSupply = powerSupply
        return this
    }

    setRam(ram:number_):ComputerBuilder{
        this.ram = ram
        return this
    }

    setSsd(ssd:number_):ComputerBuilder{
        this.ssd = ssd
        return this
    }
    
    setHdd(hdd:number_):ComputerBuilder{
        this.hdd = hdd
        return this
    }

    setIsWaterCooled(isWaterCooled:boolean_):ComputerBuilder{
        this.isWaterCooled = isWaterCooled
        return this
    }
    

    build():Computer{

        return new Computer(
            this.cpu, 
            this.gpu, 
            this.motherBoard, 
            this.powerSupply,
            this.ram,this.ssd,this.hdd,
            this.isWaterCooled)
    }
}