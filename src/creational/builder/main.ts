import ComputerDirector from "./computer_director";
import ComputerBuilder from "./computer_builder";






let gamingPC = ComputerDirector.gamingComputer();
gamingPC.specs();

let officeComputer = ComputerDirector.officeComputer();
officeComputer.specs();


let pc =  new ComputerBuilder().setCpu("i9 12400f")
            .setGpu("rtx 4080")
            .setMotherBoard("gigabyte")
            .setPowerSupply("Gold")
            .setRam(32)
            .setSsd(1)
            .setHdd(2)
            .setIsWaterCooled(true)
            .build()

pc.specs();