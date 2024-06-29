interface ShapePrototype{
    readonly type: string
    getArea():number
    clone():ShapePrototype
}

class Circle implements ShapePrototype{
    type = "Circle"
    constructor(public radius:number){};
    clone(){
        return new Circle(this.radius);
    }
    getArea(){
        return this.radius* Math.PI;
    }
}

class Rectangle implements ShapePrototype{
    type = "Rectangle"
    constructor(public width:number, public height:number){};
    clone(){
        return new Rectangle(this.width,this.height);
    }
    getArea(){
        return this.width*this.height;
    }
}

class Square implements ShapePrototype{
    type = "Square"
    constructor(public side:number){};
    clone(){
        return new Square(this.side);
    }
    getArea(){
        return this.side*4;
    }
}

export { ShapePrototype,Circle, Rectangle, Square}
