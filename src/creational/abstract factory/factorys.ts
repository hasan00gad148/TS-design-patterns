import {GroundMonster, FLyingMonster, Zombie, Phantom, Zoglin, Ghast} from './products'

interface MonsterFactory {
    groundMonster(position: string,  power: number,  health: number): GroundMonster
    flyingMonster(position: string,  power: number,  health: number): FLyingMonster
}




class OverworldMonsterFactory implements MonsterFactory {

    groundMonster(position: string,  power: number,  health: number): GroundMonster{
        return new Zombie(position, power, health)
    }
    flyingMonster(position: string,  power: number,  health: number): FLyingMonster{
        return new Phantom(position, power, health)
    }
}





class NetherMonsterFactory implements MonsterFactory {
     
    groundMonster(position: string,  power: number,  health: number): GroundMonster{
        return new Zoglin(position, power, health)
    }
    flyingMonster(position: string,  power: number,  health: number): FLyingMonster{
        return new Ghast(position, power, health)
    }
}




export {MonsterFactory, OverworldMonsterFactory, NetherMonsterFactory}