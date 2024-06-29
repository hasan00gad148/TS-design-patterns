import {ShapePrototype, Circle, Rectangle, Square} from './shapes';

function cloneShape(shape: ShapePrototype):void{
    let shape2 = shape.clone();
    console.log(`\n shape1 type: ${shape.type} => shape2 type: ${shape2.type}
        \n shape1 area: ${shape.getArea()} => shape2 area: ${shape2.getArea()}`);
}

let c = new Circle(5);
let s = new Square(5);
let r = new Rectangle(5,10);

cloneShape(c);
cloneShape(s);
cloneShape(r);