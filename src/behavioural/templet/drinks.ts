abstract class Drink{


    boilWater():void{
        console.log("Boiling water...");
    }

    abstract brew():void 

    pourInCup(): void {
        console.log("Pouring into cup...");
    }

    abstract addCondiments():void

    prepare():void{
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }
}



class Tea extends Drink {

    brew(): void {
        console.log("tea is brewwing...");
        
    }

    addCondiments(): void {
        console.log("adding sugar and milk...");
        
    }

}


class Coffee extends Drink {

    brew(): void {
        console.log("Coffee is brewwing...");
    }

    addCondiments(): void {
        console.log("adding sugar...");    
    }

}


export {Tea, Coffee}