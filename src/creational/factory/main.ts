import MonsterFactory, {OverworldMonsterFactory, NetherMonsterFactory} from './factorys'
import monster from './products'


//let factory :monsterFactory  = new overworldMonsterFactory()
let factory1 = new OverworldMonsterFactory()

let monster1: monster = factory1.createMonster("0,0",2,10);

monster1.sound();
monster1.attack();


let factory2 = new NetherMonsterFactory()
let monster2: monster = factory2.createMonster("1,0",5,10);

monster2.sound();
monster2.attack();




