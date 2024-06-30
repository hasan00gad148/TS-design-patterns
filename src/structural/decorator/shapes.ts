interface Shape{
    graph():void 
}


class Rectangle implements Shape{
    graph(): void {
        console.log("\nRectangle...");
    }
}

class Square implements Shape{
    graph(): void {
        console.log("\nSquare...");
    }
}


export {Shape, Rectangle, Square} 
