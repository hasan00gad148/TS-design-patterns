import Computer from './computer'
import {string_,number_,boolean_} from './custom_types'
import ComputerBuilder from './computer_builder'

export default class ComputerDirector {
   
    static gamingComputer():Computer{
        let  builder = new ComputerBuilder()
        return builder.setCpu("i7 12000f")
                    .setGpu("rtx 3070")
                    .setMotherBoard("gigabyte bm550")
                    .setPowerSupply("Gold")
                    .setRam(32)
                    .setSsd(512)
                    .setHdd(2)
                    .setIsWaterCooled(true)
                    .build()
    }
    
    static officeComputer():Computer{
        let  builder = new ComputerBuilder()

        return builder.setCpu("i5 12000f")
                    .setGpu("intel")
                    .setMotherBoard("h310")
                    .setPowerSupply("bronze")
                    .setRam(16)
                    .setSsd(128)
                    .setHdd(1)
                    .setIsWaterCooled(false)
                    .build()
    }
}