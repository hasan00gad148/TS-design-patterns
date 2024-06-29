import { OverworldMonsterFactory, NetherMonsterFactory} from './factorys'


console.log("overworld================================================================");

let overworldFactory = new OverworldMonsterFactory();


let overworldGroundMonster =  overworldFactory.groundMonster("0,1" , 5, 10)
overworldGroundMonster.walk()
overworldGroundMonster.sound()
overworldGroundMonster.attack()

let overworldFlyingMonster = overworldFactory.flyingMonster("0,1" ,3 , 5)
overworldFlyingMonster.fly()
overworldFlyingMonster.sound()
overworldFlyingMonster.attack()




console.log("nether================================================================");

let netherFactory = new NetherMonsterFactory();


let netherGroundMonster =  netherFactory.groundMonster("0,1" , 5, 10)
netherGroundMonster.walk()
netherGroundMonster.sound()
netherGroundMonster.attack()

let netherFlyingMonster = netherFactory.flyingMonster("0,1" ,3 , 5)
netherFlyingMonster.fly()
netherFlyingMonster.sound()
netherFlyingMonster.attack()