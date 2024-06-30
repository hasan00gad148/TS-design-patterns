import {Shape, Rectangle, Square} from './shapes';


abstract class ShapeDecorator implements Shape{
    constructor(public shape: Shape){}
    graph(): void {
        this.shape.graph();
        console.log("ShapeDecorator ...");
        
    }

}

class BorderDecorator extends ShapeDecorator{
    constructor(shape: Shape){
        super(shape);
    }
    graph(): void {
        this.shape.graph();
        console.log("added border...");
        
    }
}

class RounderCournerDecorator extends ShapeDecorator{
    constructor(shape: Shape){
        super(shape);
    }
    graph(): void {
        this.shape.graph();
        console.log("added rounded corners...");
        
    }
}



export { BorderDecorator, RounderCournerDecorator}

