import monster,{Zombie, Skeleton, Zoglin, Ghast} from './products'

export default interface monsterFactory{
    createMonster(position: string,  power: number,  health: number) : monster
}


class OverworldMonsterFactory implements monsterFactory{
    constructor(){}

    createMonster(position: string,  power: number,  health: number):monster{
        if (Math.round(Math.random()))
            return new Zombie(position, power, health)   
        return new Skeleton(position, power, health)
    }
}


class NetherMonsterFactory implements monsterFactory{
    constructor(){}

    createMonster(position: string,  power: number,  health: number):monster{
        if (Math.round(Math.random()))
            return new Zoglin(position, power, health)   
        return new Ghast(position, power, health)
    }
}

export { OverworldMonsterFactory, NetherMonsterFactory}